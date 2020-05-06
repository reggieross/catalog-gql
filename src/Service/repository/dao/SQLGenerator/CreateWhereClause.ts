import { TableConfig } from './config/TableConfig';
import { ProductFiltersInput } from '../../../../GraphQL/generated/resolvers';

export const createWhere = async (
  table: keyof TableConfig,
  filters: ProductFiltersInput = {}
): Promise<string> => {
  const allFilters = Object.entries(filters);
  if (allFilters.length === 0) {
    return '';
  }

  return `Where ${transformFilters(table, filters).join(' and ')}`;
};

const transformFilters = (
  table: keyof TableConfig,
  filters: ProductFiltersInput
): string[] => {
  return Object.keys(filters).reduce((acc, property) => {
    const transformedFilter = transformFilter(
      table,
      property as keyof ProductFiltersInput
    );

    if (transformedFilter) {
      acc.push(transformedFilter);
    }
    return acc;
  }, []);
};

const transformFilter = (
  table: string,
  property: keyof ProductFiltersInput
): string => {
  switch (property) {
    case 'brandIds':
      return getStringValueForStringFilter(table, property, 'brand_id');
  }

  return undefined;
};

const getStringValueForBetweenFilter = (
  table,
  propertyName: string,
  columnName: string
) => {
  return `${table}.${columnName} between $(${propertyName}.start) and $(${propertyName}.end)`;
};

const getStringValueForStringFilter = (
  table,
  propertyName: string,
  columnName: string
) => {
  return `${table}.${columnName} in ($(${propertyName}:csv))`;
};
