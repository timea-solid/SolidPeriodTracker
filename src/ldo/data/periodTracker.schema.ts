import { Schema } from "shexj";

/**
 * =============================================================================
 * periodTrackerSchema: ShexJ Schema for periodTracker
 * =============================================================================
 */
export const periodTrackerSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://timea.solidcommunity.net/SolidPeriodTracker/data/PeriodData#PeriodEntry",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#PeriodEntry",
                ],
              },
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#startDate",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#endDate",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://timea.solidcommunity.net/SolidPeriodTracker/data/PeriodData#MenstrualCycleEntry",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#MenstrualCycleEntry",
                ],
              },
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#hasPeriod",
              valueExpr:
                "https://timea.solidcommunity.net/SolidPeriodTracker/data/PeriodData#PeriodEntry",
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#startDate",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#periodLength",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#integer",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#cycleLength",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#integer",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://timea.solidcommunity.net/SolidPeriodTracker/data/PeriodData#CycleStatistic",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#CycleStatistic",
                ],
              },
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#year",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#integer",
              },
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#numberOfMonths",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#integer",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#averageCycleLength",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#integer",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary#averagePeriodLength",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#integer",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
  ],
};
