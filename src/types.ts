export type Config = {
  speed: number;
  rpm: number;
  fuel: number;
  indicatorLeft: boolean;
  indicatorRight: boolean;

  abs: boolean;
  service: boolean;
  highBeam: boolean;
  neutral: boolean;
};

export enum Cluster {
  ALPHA = "ALPHA",
  FUNK = "FUNK",
  TESTAROSSA = "TESTAROSSA",
}
