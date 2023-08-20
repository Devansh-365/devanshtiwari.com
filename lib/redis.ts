import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

const redis = new Redis({
  url: "https://literate-cobra-30566.upstash.io",
  token:
    "AXdmASQgMmExMDAyZDctMTcyNC00Yzk4LWFlMjYtYzk3MTI5ZjViMWM0M2QwZWI2NWQzYmRmNDEyMmI4NWFjNzA4NjU4OWVmZWE=",
})

// Create a new ratelimiter, that allows 30 requests per 10 seconds
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(30, "10 s"),
  analytics: true,
})
