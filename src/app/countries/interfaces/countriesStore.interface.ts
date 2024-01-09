import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface CountriesStore {
  countries: Country[],
  query: string,
  selectedRegion: Region
}