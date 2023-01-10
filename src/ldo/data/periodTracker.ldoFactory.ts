import { LdoFactory } from "ldo";
import {
  PeriodEntryShapeType,
  MenstrualCycleEntryShapeType,
  CycleStatisticShapeType,
} from "./periodTracker.shapeTypes";

/**
 * =============================================================================
 * LDO Factories for periodTracker
 * =============================================================================
 */

/**
 * PeriodEntry LdoFactory
 */
export const PeriodEntryFactory = new LdoFactory(PeriodEntryShapeType);

/**
 * MenstrualCycleEntry LdoFactory
 */
export const MenstrualCycleEntryFactory = new LdoFactory(
  MenstrualCycleEntryShapeType
);

/**
 * CycleStatistic LdoFactory
 */
export const CycleStatisticFactory = new LdoFactory(CycleStatisticShapeType);
