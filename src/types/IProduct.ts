export default interface IProduct {
  name: string;
  description: string;
  text: string;
  price: number;
  image: string;
  specs: { [key: string]: string }[];
}
