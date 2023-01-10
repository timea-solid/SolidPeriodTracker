import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * periodTrackerContext: JSONLD Context for periodTracker
 * =============================================================================
 */
export const periodTrackerContext: ContextDefinition = {
  type: {
    "@id": "@type",
    "@container": "@set",
  },
  PeriodEntry:
    "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#PeriodEntry",
  startDate: {
    "@id":
      "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#startDate",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
    "@container": "@set",
  },
  endDate: {
    "@id":
      "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#endDate",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  MenstrualCycleEntry:
    "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#MenstrualCycleEntry",
  hasPeriod: {
    "@id":
      "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#hasPeriod",
    "@type": "@id",
  },
  periodLength: {
    "@id":
      "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#periodLength",
    "@type": "http://www.w3.org/2001/XMLSchema#integer",
  },
  cycleLength: {
    "@id":
      "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#cycleLength",
    "@type": "http://www.w3.org/2001/XMLSchema#integer",
  },
  CycleStatistic:
    "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#CycleStatistic",
  year: {
    "@id":
      "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#year",
    "@type": "http://www.w3.org/2001/XMLSchema#integer",
  },
  numberOfMonths: {
    "@id":
      "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#numberOfMonths",
    "@type": "http://www.w3.org/2001/XMLSchema#integer",
  },
  averageCycleLength: {
    "@id":
      "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#averageCycleLength",
    "@type": "http://www.w3.org/2001/XMLSchema#integer",
  },
  averagePeriodLength: {
    "@id":
      "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#averagePeriodLength",
    "@type": "http://www.w3.org/2001/XMLSchema#integer",
  },
};
