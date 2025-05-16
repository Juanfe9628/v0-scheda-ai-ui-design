"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, XCircle, ChevronRight, FileText } from "lucide-react"

// Sample data for demonstration
const materialForms = [
  {
    id: "1",
    code: "FRP-01",
    name: "Fiber Reinforced Polymer Type 1",
    submittedBy: "Contractor A",
    submittedDate: "2025-05-10",
    status: "pending",
    preApproved: true,
    finalApproved: false,
    approvals: {
      total: 4,
      completed: 2,
    },
  },
  {
    id: "2",
    code: "STL-02",
    name: "Structural Steel Grade S355",
    submittedBy: "Contractor B",
    submittedDate: "2025-05-08",
    status: "approved",
    preApproved: true,
    finalApproved: true,
    approvals: {
      total: 4,
      completed: 4,
    },
  },
  {
    id: "3",
    code: "CNC-05",
    name: "Concrete Mix C30/37",
    submittedBy: "Contractor A",
    submittedDate: "2025-05-05",
    status: "rejected",
    preApproved: false,
    finalApproved: false,
    approvals: {
      total: 4,
      completed: 3,
    },
  },
  {
    id: "4",
    code: "INS-03",
    name: "Thermal Insulation Panel",
    submittedBy: "Contractor C",
    submittedDate: "2025-05-01",
    status: "pending",
    preApproved: true,
    finalApproved: false,
    approvals: {
      total: 4,
      completed: 1,
    },
  },
]

export default function MaterialFormList() {
  const [forms] = useState(materialForms)

  return (
    <div className="grid gap-4">
      {forms.map((form) => (
        <Link key={form.id} href={`/materials/${form.id}`} className="block transition-all hover:scale-[1.01]">
          <Card className="overflow-hidden border-none shadow-sm transition-shadow hover:shadow-md">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100">
                    <FileText className="h-6 w-6 text-zinc-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium text-zinc-900">{form.name}</h3>
                      <Badge variant="outline" className="rounded-full border-zinc-200 font-medium">
                        {form.code}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-zinc-500">
                      Submitted by {form.submittedBy} on {form.submittedDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2">
                      {form.preApproved ? (
                        <Badge
                          variant="outline"
                          className="rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-50"
                        >
                          <CheckCircle className="mr-1 h-3 w-3" /> Pre-approved
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="rounded-full bg-red-50 text-red-700 hover:bg-red-50">
                          <XCircle className="mr-1 h-3 w-3" /> Not pre-approved
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <span>Approvals:</span>
                      <span className="font-medium">
                        {form.approvals.completed}/{form.approvals.total}
                      </span>
                    </div>
                  </div>
                  <div>
                    {form.status === "approved" ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                      </div>
                    ) : form.status === "rejected" ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                        <XCircle className="h-5 w-5 text-red-600" />
                      </div>
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <Clock className="h-5 w-5 text-amber-600" />
                      </div>
                    )}
                  </div>
                  <ChevronRight className="h-5 w-5 text-zinc-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
