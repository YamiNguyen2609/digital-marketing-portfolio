'use client';

import { DataContext, SheetData, PersonalInfo, ContactInfo, ServiceInfo, ClientInfo, TimelineItem, SkillItem, PortfolioItem, AchievementItem, SkillGroup, PortfolioGroup } from '@/context/DataContext';
import { fetchGoogleSheet } from '@/lib/googleSheets';
import { ReactNode, useEffect, useState } from 'react';

interface DataProviderProps {
  children: ReactNode;
}

export function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<SheetData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const sheetData = await getAllData();
      if (!sheetData) {
        throw new Error('Failed to fetch data');
      }
      setData(sheetData);
    } catch (err) {
      console.error('Error fetching sheet data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = async () => {
    await fetchData();
  };

  return (
    <DataContext.Provider value={{ data, loading, error, refetch }}>
      {children}
    </DataContext.Provider>
  );
}


/**
 * Read data from a specific range in the spreadsheet
 */
async function readRange(): Promise<string[][]> {
  return await fetchGoogleSheet<string[][]>('A:Z');
}

/**
 * Find row index where a specific ID appears in column A
 */
function findRowById(data: string[][], id: string): number {
  return data.findIndex(row => row[0] === id);
}

/**
 * Find section boundaries in sheet
 */
function findSection(data: string[][], startMarker: string, endMarker: string): { start: number; end: number } {
  let start = -1;
  let end = -1;

  for (let i = 0; i < data.length; i++) {
    const row = data[i][0] || '';
    if (row.includes(startMarker)) {
      start = i + 1; // Skip header row
    }
    if (row.includes(endMarker)) {
      end = i;
      break;
    }
  }

  return { start, end };
}

// ============================================
// Data Fetching Functions
// ============================================

/**
 * Get Personal Information
 */
export async function getPersonalInfo(): Promise<PersonalInfo | null> {
  const data = await readRange();

  const section = findSection(data, 'Personal Information Start', 'Personal Information End');
  if (section.start === -1 || section.end === -1) return null;

  // Find the data row (skip header)
  for (let i = section.start; i < section.end; i++) {
    const row = data[i];
    if (row[0]?.startsWith('Person_')) {
      return {
        id: row[0] || '',
        firstName: row[1] || '',
        lastName: row[2] || '',
        major: row[3] || '',
        avatarUrl: row[4] || '',
        cvUrl: row[5] || '',
        bio: row[6] || '',
        focus: row[7] || '',
        vision: row[8] || '',
      };
    }
  }

  return null;
}

/**
 * Get Contact Information
 */
export async function getContacts(): Promise<ContactInfo[]> {
  const data = await readRange();

  const section = findSection(data, 'Contact Information Start', 'Contact Information End');
  if (section.start === -1 || section.end === -1) return [];

  const contacts: ContactInfo[] = [];

  for (let i = section.start; i < section.end; i++) {
    const row = data[i];
    if (row[0]?.startsWith('Contact_')) {
      contacts.push({
        id: row[0] || '',
        title: row[1] || '',
        description: row[2] || '',
        icon: row[3] || '',
      });
    }
  }

  return contacts;
}

/**
 * Get Service Information
 */
export async function getServices(): Promise<ServiceInfo[]> {
  const data = await readRange();

  const section = findSection(data, 'Service Information Start', 'Service Information End');
  if (section.start === -1 || section.end === -1) return [];

  const services: ServiceInfo[] = [];

  for (let i = section.start; i < section.end; i++) {
    const row = data[i];
    if (row[0]?.startsWith('Service_')) {
      services.push({
        id: row[0] || '',
        title: row[1] || '',
        description: row[2] || '',
        icon: row[3] || '',
      });
    }
  }

  return services;
}

/**
 * Get Client Information
 */
export async function getClients(): Promise<ClientInfo[]> {
  const data = await readRange();

  const section = findSection(data, 'Client Information Start', 'Client Information End');
  if (section.start === -1 || section.end === -1) return [];

  const clients: ClientInfo[] = [];

  for (let i = section.start; i < section.end; i++) {
    const row = data[i];
    if (row[0]?.startsWith('Client_')) {
      clients.push({
        id: row[0] || '',
        name: row[1] || '',
      });
    }
  }

  return clients;
}

/**
 * Get Timeline Information
 */
export async function getTimeline(): Promise<TimelineItem[]> {
  const data = await readRange();

  const section = findSection(data, 'Timeline Start', 'Timeline End');
  if (section.start === -1 || section.end === -1) return [];

  const timeline: TimelineItem[] = [];

  for (let i = section.start; i < section.end; i++) {
    const row = data[i];
    if (row[0]?.startsWith('Timeline_')) {
      timeline.push({
        id: row[0] || '',
        name: row[1] || '',
        description: row[2] || '',
        location: row[3] || '',
        startDate: row[4] || '',
        endDate: row[5] || '',
      });
    }
  }

  return timeline;
}

/**
 * Get Skills Information
 */
export async function getSkills(): Promise<SkillGroup[]> {
  const data = await readRange();

  const section = findSection(data, 'Skill Start', 'Skill End');
  if (section.start === -1 || section.end === -1) return [];

  const skills: SkillGroup[] = [];

  for (let i = section.start; i < section.end; i++) {
    const row = data[i];
    if (row[0]?.startsWith('Skill_')) {
      let item = skills.find(s => s.group == row[2]);
      if (item) {
        item.items.push({
          id: row[0] || '',
          name: row[1] || '',
          value: parseInt(row[3]) || 0,
        });
      } else {
        skills.push({
          group: row[2] || '',
          items: [
            {
              id: row[0] || '',
              name: row[1] || '',
              value: parseInt(row[3]) || 0,
            },
          ],
        });
      }
    }
  }

  return skills;
}

/**
 * Get Portfolio Information
 */
export async function getPortfolio(): Promise<PortfolioGroup[]> {
  const data = await readRange();

  const section = findSection(data, 'Portfolio Start', 'Portfolio End');
  if (section.start === -1 || section.end === -1) return [];

  const portfolio: PortfolioGroup[] = [];

  for (let i = section.start; i < section.end; i++) {
    const row = data[i];
    if (row[0]?.startsWith('Portfolio_')) {
      let item = portfolio.find(s => s.group == row[2]);
      if (item) {
        item.items.push({
          id: row[0] || '',
          name: row[1] || '',
          category: row[2] || '',
          image: row[3] || '',
        });
      } else {
        portfolio.push({
          group: row[2] || '',
          items: [
            {
              id: row[0] || '',
              name: row[1] || '',
              category: row[2] || '',
              image: row[3] || '',
            },
          ],
        });
      }
    }
  }

  return portfolio;
}

/**
 * Get Achievement Information
 */
export async function getAchievements(): Promise<AchievementItem[]> {
  const data = await readRange();

  const section = findSection(data, 'Achievement Start', 'Achievement End');
  const images = findSection(data, 'Achievement Image Start', 'Achievement Image End');
  if (section.start === -1 || section.end === -1) return [];

  const achievements: AchievementItem[] = [];

  for (let i = section.start; i < section.end; i++) {
    const row = data[i];
    if (row[0]?.startsWith('Achievement_')) {
      let item = {
        id: row[0] || '',
        brandName: row[1] || '',
        goal: row[2] || '',
        result: row[3] || '',
        duration: row[4] || '',
        thumbnail: row[5] || '',
        images: [] as string[],
      };
      for (let j = images.start; j < images.end; j++) {
        const imgRow = data[j];
        if (imgRow[1] == row[0]) {
          item.images.push(imgRow[2]);
        }
      }
      achievements.push(item);
    }
  }

  return achievements;
}


/**
 * Get all data at once
 */
export async function getAllData(): Promise<SheetData> {
  const [personal, contacts, services, clients, timeline, skills, portfolio, achievements] = await Promise.all([
    getPersonalInfo(),
    getContacts(),
    getServices(),
    getClients(),
    getTimeline(),
    getSkills(),
    getPortfolio(),
    getAchievements(),
  ]);

  return {
    personal,
    contacts,
    services,
    clients,
    timeline,
    skills,
    portfolio,
    achievements,
  };
}