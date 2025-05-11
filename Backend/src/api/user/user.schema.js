const { z } = require("zod");

const userLoginSchema = z.object({
  nikNpm: z.string(),
  password: z.string().min(8),
});

module.exports = { userLoginSchema };
