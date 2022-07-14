export interface Athlete{
    name:string;
    location:string;
    weight:number | string;
    height:number | string;
  };

export const athletes:Array<Athlete> = [
    {
       name:"John",
       location:"San Francisco",
       weight:160,
       height:4.11
    },
    {
      name:"John luther",
      location:"San Francisco",
      weight:160,
      height:4.11
   },
   {
    name:"Jake",
    location:"San Francisco",
    weight:160,
    height:4.11
 },
 {
  name:"Jacob",
  location:"San Francisco",
  weight:160,
  height:4.11
},
];