"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocumentViewer() {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)

  const totalPages = 5 // This would be dynamic in a real application

  const handleZoomIn = () => {
    if (zoom < 200) setZoom(zoom + 25)
  }

  const handleZoomOut = () => {
    if (zoom > 50) setZoom(zoom - 25)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg bg-white p-2 shadow-sm">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={handlePrevPage} disabled={currentPage === 1} className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={handleZoomOut} disabled={zoom <= 50} className="h-8 w-8">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">{zoom}%</span>
          <Button variant="ghost" size="icon" onClick={handleZoomIn} disabled={zoom >= 200} className="h-8 w-8">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex h-[500px] items-center justify-center rounded-lg bg-white p-4 shadow-sm">
        {/* This would be a real PDF viewer in a production app */}
        <div className="relative h-full w-full overflow-hidden" style={{ transform: `scale(${zoom / 100})` }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-md space-y-6 p-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-1.5 rounded bg-emerald-500"></div>
                  <h2 className="text-2xl font-bold text-zinc-900">FRP-01 Technical Datasheet</h2>
                </div>
                <p className="text-sm text-zinc-500">Fiber Reinforced Polymer Type 1</p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-zinc-900">Technical Specifications</h3>
                  <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2 rounded-lg bg-zinc-50 p-3">
                      <span className="font-medium text-zinc-700">Tensile Strength:</span>
                      <span className="text-zinc-900">3000 MPa</span>
                    </li>
                    <li className="flex items-center gap-2 rounded-lg bg-zinc-50 p-3">
                      <span className="font-medium text-zinc-700">Elastic Modulus:</span>
                      <span className="text-zinc-900">165 GPa</span>
                    </li>
                    <li className="flex items-center gap-2 rounded-lg bg-zinc-50 p-3">
                      <span className="font-medium text-zinc-700">Elongation:</span>
                      <span className="text-zinc-900">1.8%</span>
                    </li>
                    <li className="flex items-center gap-2 rounded-lg bg-zinc-50 p-3">
                      <span className="font-medium text-zinc-700">Density:</span>
                      <span className="text-zinc-900">1.6 g/cm³</span>
                    </li>
                    <li className="flex items-center gap-2 rounded-lg bg-zinc-50 p-3">
                      <span className="font-medium text-zinc-700">Fiber Content:</span>
                      <span className="text-zinc-900">68% by volume</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-900">Applications</h3>
                  <p className="mt-3 rounded-lg bg-zinc-50 p-3 text-sm text-zinc-700">
                    Suitable for structural reinforcement of concrete, masonry, timber, and steel structures.
                    Particularly effective for seismic retrofitting and load capacity enhancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
