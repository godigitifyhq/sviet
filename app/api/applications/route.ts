import { NextRequest } from "next/server";

import { withApiHandler } from "@/services/api-handler";
import { requireAuthUser } from "@/services/auth-context";
import { assertHasRole } from "@/modules/auth/rbac";
import { createApplicationSchema } from "@/validators/applications";
import { createApplication } from "@/modules/applications/applications.service";

export async function POST(request: NextRequest) {
  return withApiHandler(async () => {
    const user = await requireAuthUser(request);
    assertHasRole(user.role, ["APPLICANT", "COUNSELOR", "ADMIN", "SUPER_ADMIN"]);

    const payload = createApplicationSchema.parse(await request.json());
    return createApplication(payload, user);
  });
}
