'use client';

import { createContext, useContext } from 'react';

// Types for Google Sheets data

export interface PersonalInfo {
    id: string;
    firstName: string;
    lastName: string;
    major: string;
    avatarUrl: string;
    cvUrl: string;
    bio: string;
    focus: string;
    vision: string;
}

export interface ContactInfo {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface ServiceInfo {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface ClientInfo {
    id: string;
    name: string;
}

export interface TimelineItem {
    id: string;
    name: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
}

export interface SkillGroup {
    group: string;
    items: SkillItem[];
}

export interface SkillItem {
    id: string;
    name: string;
    value: number;
}

export interface PortfolioGroup {
    group: string;
    items: PortfolioItem[];
}

export interface PortfolioItem {
    id: string;
    name: string;
    category: string;
    image: string;
}

export interface AchievementItem {
    id: string;
    brandName: string;
    goal: string;
    result: string;
    duration: string;
    thumbnail: string;
    images: string[];
}

export interface SheetData {
    personal: PersonalInfo | null;
    contacts: ContactInfo[];
    services: ServiceInfo[];
    clients: ClientInfo[];
    timeline: TimelineItem[];
    skills: SkillGroup[];
    portfolio: PortfolioGroup[];
    achievements: AchievementItem[];
}


interface DataContextType {
    data: SheetData | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within DataProvider');
    }
    return context;
};