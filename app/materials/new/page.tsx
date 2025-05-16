"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function NewMaterialFormPage() {
  const [materialCode, setMaterialCode] = useState("")
  const [materialName, setMaterialName] = useState("")
  const [description, setDescription] = useState("")
  const [files, setFiles] = useState({
    datasheet: null,
    csa: null,
    cme: null,
    acustica: null,
    antincendio: null,
  })

  const handleFileChange = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFiles((prev) => ({
        ...prev,
        [type]: e.target.files?.[0] || null,
      }))
    }
  }

  const handleRemoveFile = (type: string) => {
    setFiles((prev) => ({
      ...prev,
      [type]: null,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would submit the form data to your API
    console.log({ materialCode, materialName, description, files })
    // Then redirect to the material page
  }

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
        <div className="container max-w-4xl">
          <div className="mb-8">
            <Link href="/" className="mb-6 flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">New Material Form</h1>
            <p className="mt-1 text-zinc-500">Submit a new material for approval</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <Card className="overflow-hidden border-none shadow-sm">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-zinc-900">Material Information</h2>
                  <p className="text-sm text-zinc-500">Basic details about the material</p>
                </div>
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="material-code" className="text-zinc-700">
                        Material Code (Contrassegno Tipo)
                      </Label>
                      <Input
                        id="material-code"
                        placeholder="e.g. FRP-01"
                        value={materialCode}
                        onChange={(e) => setMaterialCode(e.target.value)}
                        className="border-zinc-200 focus-visible:ring-emerald-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="material-name" className="text-zinc-700">
                        Material Name
                      </Label>
                      <Input
                        id="material-name"
                        placeholder="e.g. Fiber Reinforced Polymer Type 1"
                        value={materialName}
                        onChange={(e) => setMaterialName(e.target.value)}
                        className="border-zinc-200 focus-visible:ring-emerald-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-zinc-700">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a detailed description of the material"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-[120px] resize-none border-zinc-200 focus-visible:ring-emerald-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-sm">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-zinc-900">Material Datasheet</h2>
                  <p className="text-sm text-zinc-500">Upload the technical datasheet for this material</p>
                </div>
                <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50 p-8">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    {files.datasheet ? (
                      <div className="w-full max-w-md">
                        <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-emerald-100">
                              <FileText className="h-5 w-5 text-emerald-600" />
                            </div>
                            <div className="text-left">
                              <p className="font-medium text-zinc-900 truncate max-w-[200px]">{files.datasheet.name}</p>
                              <p className="text-xs text-zinc-500">
                                {(files.datasheet.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-zinc-900"
                            onClick={() => handleRemoveFile("datasheet")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                          <Upload className="h-8 w-8 text-emerald-600" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-base font-medium text-zinc-900">Upload datasheet</p>
                          <p className="text-sm text-zinc-500">PDF up to 10MB</p>
                        </div>
                        <Input
                          type="file"
                          accept=".pdf"
                          className="hidden"
                          id="datasheet-upload"
                          onChange={(e) => handleFileChange("datasheet", e)}
                        />
                        <Label
                          htmlFor="datasheet-upload"
                          className="cursor-pointer rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                        >
                          Select File
                        </Label>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-sm">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-zinc-900">Required Documents</h2>
                  <p className="text-sm text-zinc-500">Upload the mandatory contract documents</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-100">
                        <FileText className="h-5 w-5 text-zinc-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-zinc-900">Capitolato Speciale d'Appalto (CSA)</h3>
                        <p className="text-xs text-zinc-500">Required document</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {files.csa ? (
                        <div className="flex items-center justify-between rounded-lg bg-zinc-50 p-3">
                          <span className="truncate text-sm font-medium text-zinc-700">{files.csa.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-zinc-900"
                            onClick={() => handleRemoveFile("csa")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Input
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            id="csa-upload"
                            onChange={(e) => handleFileChange("csa", e)}
                          />
                          <Label
                            htmlFor="csa-upload"
                            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white p-3 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50"
                          >
                            <Upload className="h-4 w-4" />
                            Upload CSA
                          </Label>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-100">
                        <FileText className="h-5 w-5 text-zinc-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-zinc-900">Computo Metrico Estimativo (CME)</h3>
                        <p className="text-xs text-zinc-500">Required document</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {files.cme ? (
                        <div className="flex items-center justify-between rounded-lg bg-zinc-50 p-3">
                          <span className="truncate text-sm font-medium text-zinc-700">{files.cme.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-zinc-900"
                            onClick={() => handleRemoveFile("cme")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Input
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            id="cme-upload"
                            onChange={(e) => handleFileChange("cme", e)}
                          />
                          <Label
                            htmlFor="cme-upload"
                            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white p-3 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50"
                          >
                            <Upload className="h-4 w-4" />
                            Upload CME
                          </Label>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-100">
                        <FileText className="h-5 w-5 text-zinc-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-zinc-900">Relazione Acustica</h3>
                        <p className="text-xs text-zinc-500">Required document</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {files.acustica ? (
                        <div className="flex items-center justify-between rounded-lg bg-zinc-50 p-3">
                          <span className="truncate text-sm font-medium text-zinc-700">{files.acustica.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-zinc-900"
                            onClick={() => handleRemoveFile("acustica")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Input
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            id="acustica-upload"
                            onChange={(e) => handleFileChange("acustica", e)}
                          />
                          <Label
                            htmlFor="acustica-upload"
                            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white p-3 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50"
                          >
                            <Upload className="h-4 w-4" />
                            Upload Relazione Acustica
                          </Label>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-100">
                        <FileText className="h-5 w-5 text-zinc-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-zinc-900">Relazione Antincendio</h3>
                        <p className="text-xs text-zinc-500">Required document</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {files.antincendio ? (
                        <div className="flex items-center justify-between rounded-lg bg-zinc-50 p-3">
                          <span className="truncate text-sm font-medium text-zinc-700">{files.antincendio.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-zinc-900"
                            onClick={() => handleRemoveFile("antincendio")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Input
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            id="antincendio-upload"
                            onChange={(e) => handleFileChange("antincendio", e)}
                          />
                          <Label
                            htmlFor="antincendio-upload"
                            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white p-3 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50"
                          >
                            <Upload className="h-4 w-4" />
                            Upload Relazione Antincendio
                          </Label>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                type="button"
                asChild
                className="border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
              >
                <Link href="/">Cancel</Link>
              </Button>
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                Submit Material Form
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
