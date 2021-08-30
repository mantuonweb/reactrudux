import { FilterSatelliteState } from "../../models/models";

export class SateLiteApi {
    // if (launch != undefined) {
    //     params = params.append("launch_success", launch.toString());
    //   }
    //   if (land != undefined) {
    //     params = params.append("land_success", land.toString());
    //   }
    //   if (year != undefined) {
    //     params = params.append("launch_year", year.toString());
    //   }
    static getList(filter?: FilterSatelliteState) {
        let params = '';
        if(filter?.year!==undefined){
            params = params + `launch_year=${filter.year}&`
        }
        if(filter?.launched!==undefined){
            params = params + `launch_success=${filter.launched}&`
        }
        if(filter?.landed!==undefined){
            params = params + `land_success=${filter.launched}&`
        }
        return fetch('https://api.spaceXdata.com/v3/launches?'+params);
    }
}