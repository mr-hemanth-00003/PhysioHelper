'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Pill, AlertCircle, Info, Thermometer, Heart, Brain, Wind, CircleDot, X, Clock, Shield, Activity, Zap, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { comprehensiveDrugs } from '@/lib/comprehensive-drugs-v2';

interface Drug {
  name: string;
  category: string;
  class: string;
  dosage: string;
  indications: string[];
  contraindications: string[];
  interactions: string[];
  sideEffects: string[];
  monitoring: string[];
  conditions: string[];
}

export function DrugSearch() {
  const drugs = comprehensiveDrugs;
  
  // Debug: Check for duplicates in imported data
  const drugNames = drugs.map(drug => drug.name);
  const uniqueNames = [...new Set(drugNames)];
  if (drugNames.length !== uniqueNames.length) {
    console.error('Duplicate drug names in imported data:', drugNames.filter((name, index) => drugNames.indexOf(name) !== index));
  }
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isInteractionsOpen, setIsInteractionsOpen] = useState(false);
  const [interactionSearchTerm, setInteractionSearchTerm] = useState('');

  const filteredDrugs = useMemo(() => {
    let filtered = drugs;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(drug =>
        drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.dosage.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.indications.some(indication => indication.toLowerCase().includes(searchTerm.toLowerCase())) ||
        drug.contraindications.some(contraindication => contraindication.toLowerCase().includes(searchTerm.toLowerCase())) ||
        drug.interactions.some(interaction => interaction.toLowerCase().includes(searchTerm.toLowerCase())) ||
        drug.sideEffects.some(effect => effect.toLowerCase().includes(searchTerm.toLowerCase())) ||
        drug.monitoring.some(monitor => monitor.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (drug.conditions && drug.conditions.some(condition => condition.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(drug => drug.category === selectedCategory);
    }
    
    // Filter by letter
    if (selectedLetter && selectedLetter !== 'all') {
      filtered = filtered.filter(drug => drug.name.toUpperCase().startsWith(selectedLetter));
    }

    // Filter by condition
    if (selectedCondition && selectedCondition !== 'all') {
      filtered = filtered.filter(drug => 
        drug.conditions && drug.conditions.includes(selectedCondition)
      );
    }
    
    // Debug: Check for duplicates
    const drugNames = filtered.map(drug => drug.name);
    const uniqueNames = [...new Set(drugNames)];
    if (drugNames.length !== uniqueNames.length) {
      console.error('Duplicate drug names found:', drugNames.filter((name, index) => drugNames.indexOf(name) !== index));
    }
    
    return filtered;
  }, [drugs, searchTerm, selectedCategory, selectedLetter, selectedCondition]);

  const uniqueCategories = useMemo(() => {
    return [...new Set(drugs.map(drug => drug.category))];
  }, [drugs]);

  const uniqueConditions = useMemo(() => {
    const allConditions = drugs
      .filter(drug => drug.conditions)
      .flatMap(drug => drug.conditions || []);
    return [...new Set(allConditions)].sort();
  }, [drugs]);

  const alphabet = useMemo(() => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  }, []);

  const getDrugCountByCategory = (category: string) => {
    return drugs.filter(drug => drug.category === category).length;
  };

  const getDrugCountByLetter = (letter: string) => {
    return drugs.filter(drug => drug.name.toUpperCase().startsWith(letter)).length;
  };

  const getDrugCountByCondition = (condition: string) => {
    return drugs.filter(drug => drug.conditions && drug.conditions.includes(condition)).length;
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedLetter('all');
    setSelectedCondition('all');
  };

  const getConditionIcon = (condition: string) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('fever') || conditionLower.includes('pain')) return <Thermometer className="h-4 w-4" />;
    if (conditionLower.includes('heart') || conditionLower.includes('blood pressure')) return <Heart className="h-4 w-4" />;
    if (conditionLower.includes('cough') || conditionLower.includes('asthma') || conditionLower.includes('cold')) return <Wind className="h-4 w-4" />;
    if (conditionLower.includes('stomach') || conditionLower.includes('acid')) return <CircleDot className="h-4 w-4" />;
    if (conditionLower.includes('anxiety') || conditionLower.includes('depression')) return <Brain className="h-4 w-4" />;
    return <Pill className="h-4 w-4" />;
  };

  const openDrugDetails = (drug: Drug) => {
    setSelectedDrug(drug);
    setIsDetailsOpen(true);
  };

  const closeDrugDetails = () => {
    setIsDetailsOpen(false);
    setSelectedDrug(null);
  };

  const openInteractions = (drug: Drug) => {
    setSelectedDrug(drug);
    setIsInteractionsOpen(true);
    setInteractionSearchTerm('');
  };

  const closeInteractions = () => {
    setIsInteractionsOpen(false);
    setSelectedDrug(null);
    setInteractionSearchTerm('');
  };

  // Find drugs that interact with the selected drug
  const getInteractingDrugs = (drugName: string) => {
    return drugs.filter(drug => 
      drug.interactions.some(interaction => 
        interaction.toLowerCase().includes(drugName.toLowerCase())
      )
    );
  };

  // Get all unique interactions across all drugs
  const getAllInteractions = () => {
    const allInteractions = drugs.flatMap(drug => 
      drug.interactions.map(interaction => ({
        interaction,
        drugName: drug.name,
        drugCategory: drug.category
      }))
    );
    
    if (interactionSearchTerm) {
      return allInteractions.filter(item => 
        item.interaction.toLowerCase().includes(interactionSearchTerm.toLowerCase()) ||
        item.drugName.toLowerCase().includes(interactionSearchTerm.toLowerCase())
      );
    }
    
    return allInteractions;
  };

  // CSV Export functionality
  const exportToCSV = (data: Drug[], filename: string = 'drug-database') => {
    // Define CSV headers
    const headers = [
      'Drug Name',
      'Category',
      'Class',
      'Dosage',
      'Indications',
      'Contraindications',
      'Interactions',
      'Side Effects',
      'Monitoring',
      'Conditions'
    ];

    // Convert data to CSV format
    const csvContent = [
      headers.join(','),
      ...data.map(drug => [
        `"${drug.name.replace(/"/g, '""')}"`,
        `"${drug.category.replace(/"/g, '""')}"`,
        `"${drug.class.replace(/"/g, '""')}"`,
        `"${drug.dosage.replace(/"/g, '""')}"`,
        `"${drug.indications.join('; ').replace(/"/g, '""')}"`,
        `"${drug.contraindications.join('; ').replace(/"/g, '""')}"`,
        `"${drug.interactions.join('; ').replace(/"/g, '""')}"`,
        `"${drug.sideEffects.join('; ').replace(/"/g, '""')}"`,
        `"${drug.monitoring.join('; ').replace(/"/g, '""')}"`,
        `"${drug.conditions ? drug.conditions.join('; ').replace(/"/g, '""') : ''}"`
      ].join(','))
    ].join('\n');

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportFilteredDrugs = () => {
    const filename = `filtered-drugs-${searchTerm || 'all'}-${selectedCategory !== 'all' ? selectedCategory : 'all-categories'}-${selectedCondition !== 'all' ? selectedCondition : 'all-conditions'}`;
    exportToCSV(filteredDrugs, filename);
  };

  const exportAllDrugs = () => {
    exportToCSV(drugs, 'complete-drug-database');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Drug Database</h1>
                <p className="text-sm text-muted-foreground">Comprehensive Medication Information</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>{drugs.length} Medications Available</span>
              </div>
              
              {/* Export Buttons */}
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={exportAllDrugs}
                  className="border-2 border-green-500/20 hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-300"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export All
                </Button>
                {filteredDrugs.length !== drugs.length && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={exportFilteredDrugs}
                    className="border-2 border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Filtered
                  </Button>
                )}
              </div>
              
              <Button variant="outline" size="sm" className="border-2 border-primary/20 hover:border-primary/40">
                <Info className="h-4 w-4 mr-2" />
                Help
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Healthcare Theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>
        
        {/* Subtle Lighting Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-primary/5 animate-fade-in"></div>
        <div className="absolute top-0 left-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-b from-primary/10 to-transparent blur-3xl transform -translate-x-1/2 animate-fade-in" style={{animationDelay: '0.3s'}}></div>
        
        <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center space-y-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium animate-fade-in animate-pulse-glow" style={{animationDelay: '0.6s'}}>
              💊 Comprehensive Drug Database
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
              <span className="animate-fade-in block" style={{animationDelay: '0.8s'}}>Find Medications</span>
              <span className="gradient-text block animate-fade-in animate-shimmer" style={{animationDelay: '1s'}}>By Condition</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '1.2s'}}>
              Search through our comprehensive database of medications by name, category, condition, or browse alphabetically. 
              Get detailed information on dosage, indications, contraindications, and more.
            </p>
            
            <p className="text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '1.4s'}}>
              {drugs.length} medications covering common medical conditions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Search and Filters */}
        <Card className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: '1.6s'}}>
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-xl">
                <Search className="h-6 w-6 text-white" />
              </div>
              Search & Filters
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Search by drug name, category, condition, or browse alphabetically
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search drugs by name, category, condition, dosage, indications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-xl"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12 border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-xl">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {uniqueCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category} ({getDrugCountByCategory(category)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Condition Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Condition</label>
                <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                  <SelectTrigger className="h-12 border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-xl">
                    <SelectValue placeholder="All Conditions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Conditions</SelectItem>
                    {uniqueConditions.map((condition) => (
                      <SelectItem key={condition} value={condition}>
                        {condition} ({getDrugCountByCondition(condition)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Letter Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Letter</label>
                <Select value={selectedLetter} onValueChange={setSelectedLetter}>
                  <SelectTrigger className="h-12 border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-xl">
                    <SelectValue placeholder="All Letters" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Letters</SelectItem>
                    {alphabet.map((letter) => (
                      <SelectItem key={letter} value={letter}>
                        {letter} ({getDrugCountByLetter(letter)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Clear Filters */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground opacity-0">Clear</label>
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="w-full h-12 border-2 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 rounded-xl"
                >
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchTerm || (selectedCategory && selectedCategory !== 'all') || (selectedLetter && selectedLetter !== 'all') || (selectedCondition && selectedCondition !== 'all')) && (
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                {searchTerm && (
                  <Badge variant="secondary" className="gap-2 px-3 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    Search: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="ml-1 hover:text-primary-dark transition-colors duration-200"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCategory && selectedCategory !== 'all' && (
                  <Badge variant="secondary" className="gap-2 px-3 py-2 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors duration-200">
                    Category: {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className="ml-1 hover:text-secondary-dark transition-colors duration-200"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCondition && selectedCondition !== 'all' && (
                  <Badge variant="secondary" className="gap-2 px-3 py-2 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors duration-200">
                    Condition: {selectedCondition}
                    <button
                      onClick={() => setSelectedCondition('all')}
                      className="ml-1 hover:text-accent-dark transition-colors duration-200"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedLetter && selectedLetter !== 'all' && (
                  <Badge variant="secondary" className="gap-2 px-3 py-2 bg-warning/10 text-warning border-warning/20 hover:bg-warning/20 transition-colors duration-200">
                    Letter: {selectedLetter}
                    <button
                      onClick={() => setSelectedLetter('all')}
                      className="ml-1 hover:text-warning-dark transition-colors duration-200"
                    >
                      ×
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Condition Access */}
        <Card className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: '1.8s'}}>
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-gradient-to-r from-secondary to-accent rounded-xl">
                <Filter className="h-6 w-6 text-white" />
              </div>
              Quick Access by Condition
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Click on a condition to quickly find relevant medications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {uniqueConditions.slice(0, 24).map((condition) => (
                <Button
                  key={condition}
                  variant={selectedCondition === condition ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCondition(selectedCondition === condition ? 'all' : condition)}
                  className={`justify-start text-xs h-auto py-3 px-4 rounded-xl transition-all duration-300 ${
                    selectedCondition === condition 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5' 
                      : 'border-2 border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5'
                  }`}
                >
                  <span className="mr-2">{getConditionIcon(condition)}</span>
                  {condition}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between animate-fade-in-up" style={{animationDelay: '2s'}}>
          <div className="flex items-center gap-4">
            <p className="text-lg text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredDrugs.length}</span> of <span className="font-semibold text-foreground">{drugs.length}</span> medications
            </p>
            
            {/* Export Results Button */}
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={exportAllDrugs}
                className="border-2 border-green-500/20 hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2" />
                Export All ({drugs.length})
              </Button>
              {filteredDrugs.length !== drugs.length && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={exportFilteredDrugs}
                  className="border-2 border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export Results ({filteredDrugs.length})
                </Button>
              )}
            </div>
          </div>
          
          {filteredDrugs.length === 0 && (
            <p className="text-lg text-warning flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              No medications found. Try adjusting your search criteria.
            </p>
          )}
        </div>

        {/* Drug Results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up" style={{animationDelay: '2.2s'}}>
          {filteredDrugs.map((drug, index) => (
            <Card 
              key={drug.name} 
              className="healthcare-card healthcare-card-hover group cursor-pointer"
              style={{animationDelay: `${2.4 + index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                      <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Pill className="h-5 w-5 text-white" />
                      </div>
                      {drug.name}
                    </CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">
                      {drug.class}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {drug.category}
                    </Badge>
                    {drug.conditions && drug.conditions.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {drug.conditions.slice(0, 2).map((condition, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                            {condition}
                          </Badge>
                        ))}
                        {drug.conditions.length > 2 && (
                          <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
                            +{drug.conditions.length - 2}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Dosage */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Dosage</p>
                  <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg border border-border/50">
                    {drug.dosage}
                  </p>
                </div>

                {/* Indications */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Indications</p>
                  <div className="flex flex-wrap gap-2">
                    {drug.indications.slice(0, 3).map((indication, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                        {indication}
                      </Badge>
                    ))}
                    {drug.indications.length > 3 && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20 cursor-help">
                              +{drug.indications.length - 3} more
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <div className="space-y-1">
                              {drug.indications.slice(3).map((indication, index) => (
                                <div key={index} className="text-xs">{indication}</div>
                              ))}
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 h-10 border-2 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 rounded-lg"
                    onClick={() => openDrugDetails(drug)}
                  >
                    <Info className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 h-10 border-2 border-border/50 hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 rounded-lg"
                    onClick={() => openInteractions(drug)}
                  >
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Interactions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredDrugs.length === 0 && (
          <Card className="healthcare-card healthcare-card-hover text-center py-16 animate-fade-in-up" style={{animationDelay: '2.4s'}}>
            <CardContent>
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">No medications found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Try adjusting your search criteria or browse by condition to discover relevant medications
              </p>
              <Button onClick={clearFilters} variant="outline" className="btn-healthcare-outline">
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Drug Details Modal */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto healthcare-card border-2 border-primary/20">
          <DialogHeader className="pb-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl">
                  <Pill className="h-8 w-8 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-3xl font-bold text-foreground">
                    {selectedDrug?.name}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-muted-foreground mt-2">
                    {selectedDrug?.class} • {selectedDrug?.category}
                  </DialogDescription>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeDrugDetails}
                className="h-8 w-8 p-0 hover:bg-muted/50"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          {selectedDrug && (
            <div className="space-y-8">
              {/* Drug Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dosage */}
                <Card className="healthcare-card border border-primary/20">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      Dosage Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground font-medium">{selectedDrug.dosage}</p>
                  </CardContent>
                </Card>

                {/* Conditions */}
                <Card className="healthcare-card border border-secondary/20">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Activity className="h-5 w-5 text-secondary" />
                      Treats Conditions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {selectedDrug.conditions?.map((condition, index) => (
                        <Badge key={index} variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Information Tabs */}
              <Tabs defaultValue="indications" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-muted/50">
                  <TabsTrigger value="indications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Indications
                  </TabsTrigger>
                  <TabsTrigger value="contraindications" className="data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground">
                    Contraindications
                  </TabsTrigger>
                  <TabsTrigger value="interactions" className="data-[state=active]:bg-warning data-[state=active]:text-warning-foreground">
                    Interactions
                  </TabsTrigger>
                  <TabsTrigger value="side-effects" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                    Side Effects
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="indications" className="mt-6">
                  <Card className="healthcare-card border border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl text-secondary">
                        <Activity className="h-6 w-6" />
                        Indications
                      </CardTitle>
                      <CardDescription>
                        Medical conditions and symptoms this medication is used to treat
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedDrug.indications.map((indication, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-foreground">{indication}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="contraindications" className="mt-6">
                  <Card className="healthcare-card border border-destructive/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl text-destructive">
                        <Shield className="h-6 w-6" />
                        Contraindications
                      </CardTitle>
                      <CardDescription>
                        Situations where this medication should NOT be used
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedDrug.contraindications.map((contraindication, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                            <div className="w-2 h-2 bg-destructive rounded-full"></div>
                            <span className="text-foreground">{contraindication}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="interactions" className="mt-6">
                  <Card className="healthcare-card border border-warning/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl text-warning">
                        <Zap className="h-6 w-6" />
                        Drug Interactions
                      </CardTitle>
                      <CardDescription>
                        Other medications, foods, or substances that may interact with this drug
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedDrug.interactions.map((interaction, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-warning/5 rounded-lg border border-warning/20">
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <span className="text-foreground">{interaction}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="side-effects" className="mt-6">
                  <Card className="healthcare-card border border-accent/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl text-accent">
                        <AlertCircle className="h-6 w-6" />
                        Side Effects
                      </CardTitle>
                      <CardDescription>
                        Potential adverse reactions and side effects of this medication
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedDrug.sideEffects.map((effect, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-foreground">{effect}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Monitoring Requirements */}
              <Card className="healthcare-card border border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-primary">
                    <Activity className="h-6 w-6" />
                    Monitoring Required
                  </CardTitle>
                  <CardDescription>
                    Tests, observations, and monitoring needed while taking this medication
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedDrug.monitoring.map((monitor, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{monitor}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

                             {/* Action Buttons */}
               <div className="flex gap-4 pt-6 border-t border-border/50">
                 <Button 
                   variant="outline" 
                   onClick={closeDrugDetails}
                   className="flex-1 h-12 border-2 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 rounded-xl"
                 >
                   Close
                 </Button>
                 <Button 
                   onClick={() => exportToCSV([selectedDrug], `drug-${selectedDrug.name.replace(/[^a-zA-Z0-9]/g, '-')}`)}
                   className="flex-1 h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
                 >
                   <Download className="h-4 w-4 mr-2" />
                   Export to CSV
                 </Button>
               </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Drug Interactions Modal */}
      <Dialog open={isInteractionsOpen} onOpenChange={setIsInteractionsOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto healthcare-card border-2 border-warning/20">
          <DialogHeader className="pb-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-warning to-orange-500 rounded-xl">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-3xl font-bold text-foreground">
                    Drug Interactions
                  </DialogTitle>
                  <DialogDescription className="text-lg text-muted-foreground mt-2">
                    {selectedDrug ? `Interactions for ${selectedDrug.name}` : 'Search all drug interactions'}
                  </DialogDescription>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeInteractions}
                className="h-8 w-8 p-0 hover:bg-muted/50"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            {/* Search Interactions */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search interactions by drug name or interaction type..."
                value={interactionSearchTerm}
                onChange={(e) => setInteractionSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg border-2 border-warning/50 focus:border-warning focus:ring-2 focus:ring-warning/20 transition-all duration-300 rounded-xl"
              />
            </div>

            {/* Selected Drug Interactions */}
            {selectedDrug && (
              <Card className="healthcare-card border border-warning/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-warning">
                    <AlertCircle className="h-6 w-6" />
                    Interactions for {selectedDrug.name}
                  </CardTitle>
                  <CardDescription>
                    Known interactions with other medications, foods, or substances
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedDrug.interactions.map((interaction, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-warning/5 rounded-lg border border-warning/20">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        <span className="text-foreground">{interaction}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Drugs That Interact with Selected Drug */}
            {selectedDrug && (
              <Card className="healthcare-card border border-secondary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-secondary">
                    <Pill className="h-6 w-6" />
                    Drugs That Interact with {selectedDrug.name}
                  </CardTitle>
                  <CardDescription>
                    Other medications that may interact with {selectedDrug.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {getInteractingDrugs(selectedDrug.name).map((drug, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <div>
                            <span className="font-medium text-foreground">{drug.name}</span>
                            <span className="text-sm text-muted-foreground ml-2">({drug.category})</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            closeInteractions();
                            openDrugDetails(drug);
                          }}
                          className="h-8 px-3 text-xs border-secondary/30 hover:border-secondary/50"
                        >
                          View Details
                        </Button>
                      </div>
                    ))}
                    {getInteractingDrugs(selectedDrug.name).length === 0 && (
                      <p className="text-muted-foreground text-center py-4">
                        No specific drug interactions found in our database.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* All Interactions Database */}
            <Card className="healthcare-card border border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-accent">
                  <Search className="h-6 w-6" />
                  All Drug Interactions Database
                </CardTitle>
                <CardDescription>
                  Search through our comprehensive database of drug interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 max-h-96 overflow-y-auto">
                  {getAllInteractions().map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-accent/20">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <div>
                          <span className="font-medium text-foreground">{item.interaction}</span>
                          <span className="text-sm text-muted-foreground ml-2">- {item.drugName}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
                        {item.drugCategory}
                      </Badge>
                    </div>
                  ))}
                  {getAllInteractions().length === 0 && (
                    <p className="text-muted-foreground text-center py-4">
                      No interactions found matching your search.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-border/50">
              <Button 
                variant="outline" 
                onClick={closeInteractions}
                className="flex-1 h-12 border-2 border-border/50 hover:border-warning/50 hover:bg-warning/5 transition-all duration-300 rounded-xl"
              >
                Close
              </Button>
                             <Button 
                 onClick={() => {
                   if (selectedDrug) {
                     const interactionsData = selectedDrug.interactions.map(interaction => ({
                       name: selectedDrug.name,
                       category: selectedDrug.category,
                       interaction: interaction
                     }));
                     exportToCSV(interactionsData, `interactions-${selectedDrug.name.replace(/[^a-zA-Z0-9]/g, '-')}`);
                   }
                 }}
                 className="flex-1 h-12 bg-gradient-to-r from-warning to-orange-500 hover:from-warning-light hover:to-orange-400 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
               >
                 <Download className="h-4 w-4 mr-2" />
                 Export Interactions
               </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
