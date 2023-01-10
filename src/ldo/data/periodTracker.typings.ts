import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for periodTracker
 * =============================================================================
 */

/**
 * PeriodEntry Type
 */
export interface PeriodEntry {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "PeriodEntry";
  };
  startDate: string;
  endDate: string;
}

/**
 * MenstrualCycleEntry Type
 */
export interface MenstrualCycleEntry {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "MenstrualCycleEntry";
  };
  hasPeriod: PeriodEntry;
  startDate: string;
  periodLength?: number;
  cycleLength?: number;
}

/**
 * CycleStatistic Type
 */
export interface CycleStatistic {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "CycleStatistic";
  };
  year: number;
  numberOfMonths?: number;
  averageCycleLength?: number;
  averagePeriodLength?: number;
}
