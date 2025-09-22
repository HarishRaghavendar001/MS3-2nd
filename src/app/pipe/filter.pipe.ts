import { Pipe, PipeTransform } from '@angular/core';
import { Listing } from '../model/listing';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Listing[],searchTerm:string):Listing[] {
    if(!value)return []
    if(!searchTerm){
      return value
    }
    const word = searchTerm.toLowerCase()
    return value.filter(val=>val.title.toLowerCase().includes(word)||
    val.agent.toLowerCase().toString().includes(word))
  }

}
// git remote add origin https://github.com/HarishRaghavendar001/MS3-2nd.git