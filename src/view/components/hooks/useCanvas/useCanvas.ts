import { useEffect, useRef } from 'react'

import { DrawFunction } from './useCanvas.types'

export const useCanvas = (
  draw: DrawFunction,
): React.RefObject<HTMLCanvasElement> => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const render = () => {
      draw(context, canvas)
    }

    render()
  }, [draw])
  return canvasRef
}
