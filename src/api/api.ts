import axios from 'axios';

const BASE_URL = `https://engineering-task.elancoapps.com/api/`;

export interface Response {
  ConsumedQuantity: number;
  Cost: number;
  Date: string;
  InstanceId: string;
  MeterCategory: string;
  ResourceGroup: string;
  ResourceLocation: string;
  Tags: {
    'app-name': string,
    environment: string,
    'business-unit': string;
  };
  UnitOfMeasure: string;
  Location: string;
  ServiceName: string;
}

export const tableColumnNames = [
  '#',
  'Consumed Quantity',
  'Cost',
  'Date',
  'Meter Category',
  'Resource Group',
  'Unit',
  'Location',
  'Service Name'
];

const tableColumnNamesForExtraction = [
  '#',
  'ConsumedQuantity',
  'Cost',
  'Date',
  'MeterCategory',
  'ResourceGroup',
  'UnitOfMeasure',
  'Location',
  'ServiceName'
];

export const extractDataForTable = (data: Response[] = []): Array<Array<string | number>> => {
  const result: Array<Array<string | number>> = [];
  data.forEach((thisData: any, i) => {
    result.push(
      tableColumnNamesForExtraction.reduce(
        (acc: Array<string | number>, t: string) => {
          if (t === '#') {
            acc.push(i + 1);
          } else {
            acc.push(thisData[t]);
          }
          return acc;
        },
        []
      )
    );
  });

  return result;
};

export default class API {
  static async fetchApplications(): Promise<string[]> {
    try {
      const { data } = await axios.get(`${BASE_URL}applications`);
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async fetchApplicationsByName(name: string): Promise<Response[]> {
    try {
      const { data } = await axios.get(`${BASE_URL}applications/${name}`);
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async fetchResources(): Promise<string[]> {
    try {
      const { data } = await axios.get(`${BASE_URL}resources`);
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async fetchResourcesByName(name: string): Promise<Response[]> {
    try {
      const { data } = await axios.get(`${BASE_URL}resources/${name}`);
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}