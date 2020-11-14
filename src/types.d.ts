// declare module "react" {
//   export interface Attributes {
//       css?: any;
//   }
// }

export module '@emotion/react' {
	export interface Theme {
		colors:{
			primary: string;
			accent: string;
			primary_dark:string;
			primary_light:string;
			text:string;
			background:string;
		}
		
	}
}