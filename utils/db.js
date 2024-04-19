import { Redis } from "@upstash/redis";
const redis = new Redis({
  url: "https://eu1-pleasing-catfish-40656.upstash.io",
  token:
    "AZ7QASQgOWVjOGVjMWQtOTQxNC00OWQ4LWEyZDMtZjRiYzJjMTRlNjA4MWRlNDY2NGI0NTFlNGM4ZWI2MzI1M2JiOWM5Nzg4ODI=",
});

export default redis;
