"use client"

import { useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

type ApprovalStatus = "approved" | "rejected" | "pending"

interface Approval {
  role: string
  name: string
  status: ApprovalStatus
  date: string
  comments: string
}

interface ApprovalSectionProps {
  approvals: Approval[]
  materialId: string
}

export default function ApprovalSection({ approvals, materialId }: ApprovalSectionProps) {
  const [localApprovals, setLocalApprovals] = useState<Approval[]>(approvals)
  const [comments, setComments] = useState<Record<string, string>>({})

  const handleApprove = (role: string) => {
    setLocalApprovals((prev) =>
      prev.map((approval) =>
        approval.role === role
          ? {
              ...approval,
              status: "approved",
              date: new Date().toISOString().split("T")[0],
              comments: comments[role] || "",
            }
          : approval,
      ),
    )
  }

  const handleReject = (role: string) => {
    setLocalApprovals((prev) =>
      prev.map((approval) =>
        approval.role === role
          ? {
              ...approval,
              status: "rejected",
              date: new Date().toISOString().split("T")[0],
              comments: comments[role] || "",
            }
          : approval,
      ),
    )
  }

  const handleCommentChange = (role: string, value: string) => {
    setComments((prev) => ({ ...prev, [role]: value }))
  }

  const approvedCount = localApprovals.filter((a) => a.status === "approved").length
  const rejectedCount = localApprovals.filter((a) => a.status === "rejected").length
  const pendingCount = localApprovals.filter((a) => a.status === "pending").length
  const approvalProgress = (approvedCount / localApprovals.length) * 100

  const allApproved = localApprovals.every((approval) => approval.status === "approved")
  const anyRejected = localApprovals.some((approval) => approval.status === "rejected")

  const getFinalStatus = () => {
    if (allApproved) return "approved"
    if (anyRejected) return "rejected"
    return "pending"
  }

  const finalStatus = getFinalStatus()

  return (
    <Card className="overflow-hidden border-none shadow-sm">
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-zinc-900">Final Approval by Technical Team</h2>
          <p className="text-sm text-zinc-500">Each professional must review and approve the material</p>
        </div>

        <div className="mb-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100">
                <span className="text-lg font-medium text-zinc-700">{approvedCount}</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100">
                <span className="text-lg font-medium text-zinc-700">{pendingCount}</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100">
                <span className="text-lg font-medium text-zinc-700">{rejectedCount}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">
                {approvedCount}/{localApprovals.length}
              </span>
              <span className="text-xs text-zinc-500">approvals</span>
            </div>
          </div>

          <Progress value={approvalProgress} className="h-2 bg-zinc-100" indicatorClassName="bg-emerald-500" />

          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              {finalStatus === "approved" ? (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-emerald-700">Final Approved</h3>
                    <p className="text-sm text-zinc-500">All technical team members have approved this material</p>
                  </div>
                </>
              ) : finalStatus === "rejected" ? (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-red-700">Rejected</h3>
                    <p className="text-sm text-zinc-500">
                      One or more technical team members have rejected this material
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <div className="h-6 w-6 rounded-full border-4 border-amber-600 border-t-transparent animate-spin"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-700">Pending Approval</h3>
                    <p className="text-sm text-zinc-500">Waiting for all technical team members to review</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {localApprovals.map((approval, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-zinc-900">{approval.role}</h3>
                    {approval.status === "approved" ? (
                      <Badge className="rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                        Approved
                      </Badge>
                    ) : approval.status === "rejected" ? (
                      <Badge className="rounded-full bg-red-100 text-red-700 hover:bg-red-200">Rejected</Badge>
                    ) : (
                      <Badge variant="outline" className="rounded-full">
                        Pending
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">{approval.name}</p>
                </div>
                {approval.date && <span className="text-xs text-zinc-400">{approval.date}</span>}
              </div>

              {approval.status !== "pending" ? (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-zinc-500">Comments</h4>
                  <p className="rounded-lg bg-zinc-50 p-4 text-sm text-zinc-700">
                    {approval.comments || "No comments provided."}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <Textarea
                    placeholder="Add technical comments here..."
                    value={comments[approval.role] || ""}
                    onChange={(e) => handleCommentChange(approval.role, e.target.value)}
                    className="min-h-[100px] resize-none border-zinc-200 focus-visible:ring-emerald-500"
                  />
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 gap-2 bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => handleApprove(approval.role)}
                    >
                      <CheckCircle className="h-4 w-4" />
                      Approve
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                      onClick={() => handleReject(approval.role)}
                    >
                      <XCircle className="h-4 w-4" />
                      Reject
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
