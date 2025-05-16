"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Download, FileText, XCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DocumentViewer from "@/components/document-viewer"
import ApprovalSection from "@/components/approval-section"
import { Progress } from "@/components/ui/progress"

export default function MaterialFormPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")

  // This would come from your database in a real application
  const materialForm = {
    id: params.id,
    code: "FRP-01",
    name: "Fiber Reinforced Polymer Type 1",
    description: "High-strength composite material for structural reinforcement",
    submittedBy: "Contractor A",
    submittedDate: "2025-05-10",
    documents: {
      datasheet: true,
      csa: true,
      cme: true,
      acustica: true,
      antincendio: true,
    },
    preApproved: true,
    approvals: [
      {
        role: "Progettista Architettonico",
        name: "Marco Rossi",
        status: "approved",
        date: "2025-05-12",
        comments: "Material meets all architectural requirements.",
      },
      {
        role: "Consulente Acustico",
        name: "Laura Bianchi",
        status: "approved",
        date: "2025-05-13",
        comments: "Acoustic properties verified and compliant.",
      },
      {
        role: "Consulente Antincendio",
        name: "Giovanni Verdi",
        status: "pending",
        date: "",
        comments: "",
      },
      {
        role: "Cost Controller",
        name: "Sofia Esposito",
        status: "pending",
        date: "",
        comments: "",
      },
    ],
  }

  const allDocumentsUploaded = Object.values(materialForm.documents).every((value) => value === true)
  const approvedCount = materialForm.approvals.filter((a) => a.status === "approved").length
  const approvalProgress = (approvedCount / materialForm.approvals.length) * 100

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="cursor-pointer">
              <h1 className="text-xl font-semibold tracking-tight">
                <span className="text-zinc-900">scheda</span>
                <span className="text-emerald-600">.ai</span>
              </h1>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
              Dashboard
            </Link>
            <Link href="/materials" className="text-sm font-medium text-emerald-600">
              Materials
            </Link>
            <Link href="/reports" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
              Reports
            </Link>
            <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-sm font-medium text-emerald-700">DL</span>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-10">
        <div className="container">
          <div className="mb-8">
            <Link href="/" className="mb-6 flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Material Form</h1>
                  <Badge className="rounded-full text-sm font-medium">Contrassegno Tipo: {materialForm.code}</Badge>
                </div>
                <p className="mt-1 text-zinc-500">{materialForm.name}</p>
              </div>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Scheda
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="bg-white p-1 shadow-sm">
                  <TabsTrigger value="overview" className="rounded-full">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="documents" className="rounded-full">
                    Documents
                  </TabsTrigger>
                  <TabsTrigger value="approvals" className="rounded-full">
                    Approvals
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 mt-0">
                  <Card className="overflow-hidden border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-zinc-500">Material Code</h3>
                          <p className="mt-1 font-medium text-zinc-900">{materialForm.code}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-zinc-500">Material Name</h3>
                          <p className="mt-1 font-medium text-zinc-900">{materialForm.name}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-zinc-500">Submitted By</h3>
                          <p className="mt-1 font-medium text-zinc-900">{materialForm.submittedBy}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-zinc-500">Submission Date</h3>
                          <p className="mt-1 font-medium text-zinc-900">{materialForm.submittedDate}</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-zinc-500">Description</h3>
                        <p className="mt-1 text-zinc-700">{materialForm.description}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-sm">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-semibold text-zinc-900">Material Datasheet</h2>
                      <p className="mb-4 text-sm text-zinc-500">Technical specifications of the material</p>
                      <DocumentViewer />
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-sm">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-semibold text-zinc-900">Pre-Approval Result</h2>
                      <p className="mb-4 text-sm text-zinc-500">Automatic validation based on document consistency</p>
                      <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
                        {materialForm.preApproved ? (
                          <>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                              <CheckCircle className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-emerald-700">Pre-approved</h3>
                              <p className="text-sm text-zinc-500">
                                All required documents are consistent with the material specifications
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                              <XCircle className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-red-700">Not pre-approved</h3>
                              <p className="text-sm text-zinc-500">
                                One or more documents are missing or inconsistent with the material specifications
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="documents" className="space-y-6 mt-0">
                  <Card className="overflow-hidden border-none shadow-sm">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-semibold text-zinc-900">Required Documents</h2>
                      <p className="mb-6 text-sm text-zinc-500">Mandatory contract documents for material validation</p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg bg-white p-4 shadow-sm">
                          <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-zinc-400" />
                              <h3 className="font-medium text-zinc-900">Capitolato Speciale d'Appalto (CSA)</h3>
                            </div>
                            {materialForm.documents.csa ? (
                              <Badge variant="outline" className="rounded-full bg-emerald-50 text-emerald-700">
                                Uploaded
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="rounded-full bg-amber-50 text-amber-700">
                                Missing
                              </Badge>
                            )}
                          </div>
                          {materialForm.documents.csa ? (
                            <div className="flex items-center justify-between rounded-lg bg-zinc-50 p-3 text-sm">
                              <span className="truncate font-medium text-zinc-700">CSA_FRP-01.pdf</span>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-900">
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Download</span>
                              </Button>
                            </div>
                          ) : (
                            <Button variant="outline" className="w-full">
                              Upload CSA
                            </Button>
                          )}
                        </div>

                        <div className="rounded-lg bg-white p-4 shadow-sm">
                          <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-zinc-400" />
                              <h3 className="font-medium text-zinc-900">Computo Metrico Estimativo (CME)</h3>
                            </div>
                            {materialForm.documents.cme ? (
                              <Badge variant="outline" className="rounded-full bg-emerald-50 text-emerald-700">
                                Uploaded
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="rounded-full bg-amber-50 text-amber-700">
                                Missing
                              </Badge>
                            )}
                          </div>
                          {materialForm.documents.cme ? (
                            <div className="flex items-center justify-between rounded-lg bg-zinc-50 p-3 text-sm">
                              <span className="truncate font-medium text-zinc-700">CME_FRP-01.pdf</span>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-900">
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Download</span>
                              </Button>
                            </div>
                          ) : (
                            <Button variant="outline" className="w-full">
                              Upload CME
                            </Button>
                          )}
                        </div>

                        <div className="rounded-lg bg-white p-4 shadow-sm">
                          <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-zinc-400" />
                              <h3 className="font-medium text-zinc-900">Relazione Acustica</h3>
                            </div>
                            {materialForm.documents.acustica ? (
                              <Badge variant="outline" className="rounded-full bg-emerald-50 text-emerald-700">
                                Uploaded
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="rounded-full bg-amber-50 text-amber-700">
                                Missing
                              </Badge>
                            )}
                          </div>
                          {materialForm.documents.acustica ? (
                            <div className="flex items-center justify-between rounded-lg bg-zinc-50 p-3 text-sm">
                              <span className="truncate font-medium text-zinc-700">Acustica_FRP-01.pdf</span>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-900">
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Download</span>
                              </Button>
                            </div>
                          ) : (
                            <Button variant="outline" className="w-full">
                              Upload Relazione Acustica
                            </Button>
                          )}
                        </div>

                        <div className="rounded-lg bg-white p-4 shadow-sm">
                          <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-zinc-400" />
                              <h3 className="font-medium text-zinc-900">Relazione Antincendio</h3>
                            </div>
                            {materialForm.documents.antincendio ? (
                              <Badge variant="outline" className="rounded-full bg-emerald-50 text-emerald-700">
                                Uploaded
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="rounded-full bg-amber-50 text-amber-700">
                                Missing
                              </Badge>
                            )}
                          </div>
                          {materialForm.documents.antincendio ? (
                            <div className="flex items-center justify-between rounded-lg bg-zinc-50 p-3 text-sm">
                              <span className="truncate font-medium text-zinc-700">Antincendio_FRP-01.pdf</span>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-900">
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Download</span>
                              </Button>
                            </div>
                          ) : (
                            <Button variant="outline" className="w-full">
                              Upload Relazione Antincendio
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="approvals" className="mt-0">
                  <ApprovalSection approvals={materialForm.approvals} materialId={materialForm.id} />
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden border-none shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-zinc-900">Approval Status</h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-zinc-500">Approval Progress</span>
                        <span className="text-sm font-medium">
                          {approvedCount}/{materialForm.approvals.length}
                        </span>
                      </div>
                      <Progress
                        value={approvalProgress}
                        className="h-2 bg-zinc-100"
                        indicatorClassName="bg-emerald-500"
                      />
                    </div>

                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      {approvedCount === materialForm.approvals.length ? (
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-emerald-700">Final Approved</h3>
                            <p className="text-sm text-zinc-500">All approvals completed</p>
                          </div>
                        </div>
                      ) : approvedCount > 0 ? (
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                            <Clock className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-amber-700">In Progress</h3>
                            <p className="text-sm text-zinc-500">Waiting for remaining approvals</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100">
                            <Clock className="h-5 w-5 text-zinc-500" />
                          </div>
                          <div>
                            <h3 className="font-medium text-zinc-700">Pending Review</h3>
                            <p className="text-sm text-zinc-500">No approvals yet</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-zinc-900">Approval Timeline</h2>
                  <div className="mt-4 space-y-4">
                    {materialForm.approvals.map((approval, index) => (
                      <div key={index} className="relative pl-6">
                        {index < materialForm.approvals.length - 1 && (
                          <div className="absolute left-[11px] top-6 h-full w-[2px] bg-zinc-200"></div>
                        )}
                        <div className="flex items-start gap-3">
                          <div
                            className={`absolute left-0 top-1 h-6 w-6 rounded-full flex items-center justify-center ${
                              approval.status === "approved"
                                ? "bg-emerald-100"
                                : approval.status === "rejected"
                                  ? "bg-red-100"
                                  : "bg-zinc-200"
                            }`}
                          >
                            {approval.status === "approved" ? (
                              <CheckCircle className="h-3 w-3 text-emerald-600" />
                            ) : approval.status === "rejected" ? (
                              <XCircle className="h-3 w-3 text-red-600" />
                            ) : (
                              <div className="h-2 w-2 rounded-full bg-zinc-400"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium text-zinc-900">{approval.role}</h3>
                              {approval.status === "approved" && (
                                <Badge variant="outline" className="rounded-full bg-emerald-50 text-emerald-700">
                                  Approved
                                </Badge>
                              )}
                              {approval.status === "rejected" && (
                                <Badge variant="outline" className="rounded-full bg-red-50 text-red-700">
                                  Rejected
                                </Badge>
                              )}
                              {approval.status === "pending" && (
                                <Badge variant="outline" className="rounded-full bg-zinc-100 text-zinc-700">
                                  Pending
                                </Badge>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-zinc-500">{approval.name}</p>
                            {approval.date && <p className="mt-1 text-xs text-zinc-400">{approval.date}</p>}
                            {approval.comments && (
                              <p className="mt-2 rounded-lg bg-zinc-50 p-3 text-sm text-zinc-700">
                                {approval.comments}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
