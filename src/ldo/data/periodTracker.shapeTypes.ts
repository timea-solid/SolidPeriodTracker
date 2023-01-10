import { ShapeType } from "ldo";
import { periodTrackerSchema } from "./periodTracker.schema";
import { periodTrackerContext } from "./periodTracker.context";
import {
  PeriodEntry,
  MenstrualCycleEntry,
  CycleStatistic,
} from "./periodTracker.typings";

/**
 * =============================================================================
 * LDO ShapeTypes periodTracker
 * =============================================================================
 */

/**
 * PeriodEntry ShapeType
 */
export const PeriodEntryShapeType: ShapeType<PeriodEntry> = {
  schema: periodTrackerSchema,
  shape:
    "https://timea.solidcommunity.net/SolidPeriodTracker/data/PeriodData#PeriodEntry",
  context: periodTrackerContext,
};

/**
 * MenstrualCycleEntry ShapeType
 */
export const MenstrualCycleEntryShapeType: ShapeType<MenstrualCycleEntry> = {
  schema: periodTrackerSchema,
  shape:
    "https://timea.solidcommunity.net/SolidPeriodTracker/data/PeriodData#MenstrualCycleEntry",
  context: periodTrackerContext,
};

/**
 * CycleStatistic ShapeType
 */
export const CycleStatisticShapeType: ShapeType<CycleStatistic> = {
  schema: periodTrackerSchema,
  shape:
    "https://timea.solidcommunity.net/SolidPeriodTracker/data/PeriodData#CycleStatistic",
  context: periodTrackerContext,
};
