const BASE_URL = "https://timea.solidcommunity.net/SolidPeriodTracker/data/SolidPeriodTrackerVocabulary";
const RESOURCE_SEPARATOR = "#";

//Ontology classes 
const PERIOD_ENTRY_CLASS = BASE_URL + RESOURCE_SEPARATOR + "PeriodEntry";
const STATISTIC_CLASS = BASE_URL + RESOURCE_SEPARATOR + "Statistic";
const CYCLE_STATISTIC_CLASS = BASE_URL + RESOURCE_SEPARATOR + "CycleStatistic";
const PERIOD_STATISTIC_CLASS = BASE_URL + RESOURCE_SEPARATOR + "PeriodStatistic";

//Ontology attributes
const START_DATE = BASE_URL + RESOURCE_SEPARATOR + "startDate";
const END_DATE = BASE_URL + RESOURCE_SEPARATOR + "endDate";
const PERIOD_LENGTH = BASE_URL + RESOURCE_SEPARATOR + "periodLength";
const CYLCE_LENGTH = BASE_URL + RESOURCE_SEPARATOR + "cycleLength";
const AVERAGE_CYLCE_LENGTH = BASE_URL + RESOURCE_SEPARATOR + "averageCycleLength";
const AVERAGE_PERIOD_LENGTH = BASE_URL + RESOURCE_SEPARATOR + "averagePeriodLength";

//use it as for example: ONTOLOGY.Statistic
const ONTOLOGY = {
    PeriodEntry: PERIOD_ENTRY_CLASS,
    Statistic: STATISTIC_CLASS,
    CycleStatistic: CYCLE_STATISTIC_CLASS,
    PeriodStatistic: PERIOD_STATISTIC_CLASS,
    startDate: START_DATE,
    endDate: END_DATE,
    periodLength: PERIOD_LENGTH,
    cycleLength: CYLCE_LENGTH,
    averageCycleLength: AVERAGE_CYLCE_LENGTH,
    averagePeriodLength: AVERAGE_PERIOD_LENGTH
}