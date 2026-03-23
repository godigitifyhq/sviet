import { NextRequest } from "next/server";

import { withApiHandler } from "@/services/api-handler";
import { requireAuthUser } from "@/services/auth-context";
import { assertHasRole } from "@/modules/auth/rbac";
import { assignLeadSchema } from "@/validators/leads";
import { assignLead } from "@/modules/leads/leads.service";

type RouteContext = {
  params: Promise<{ leadId: string }>;
};

export async function POST(request: NextRequest, context: RouteContext) {
  return withApiHandler(async () => {
    const user = await requireAuthUser(request);
    assertHasRole(user.role, ["ADMIN", "SUPER_ADMIN"]);

    const { leadId } = await context.params;
    const payload = assignLeadSchema.parse(await request.json());

    return assignLead(leadId, payload.counselorId, user);
  });
}
