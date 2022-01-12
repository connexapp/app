import { useEffect, useState } from 'react'
import { Settings as SliderProps } from 'react-slick'

export type DefaultSliderProps = SliderProps

/**
 * Threshold from which mouse movement with pressed mouse button
 * is considered a drag instead of a click.
 */
const MoveDragThreshold = 10

export function useDragDetection(): {
  handleMouseDown: () => void
  dragging: boolean
} {
  const [mouseDown, setMouseDown] = useState(false)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    let mouseMove = 0

    function handleMouseUp(): void {
      setMouseDown(false)
    }

    function handleMouseMove(e: MouseEvent): void {
      mouseMove += Math.abs(e.movementX) + Math.abs(e.movementY)
      setDragging(mouseMove > MoveDragThreshold)
    }

    if (mouseDown) {
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseDown])

  function handleMouseDown(): void {
    setMouseDown(true)
    setDragging(false)
  }

  return {
    handleMouseDown,
    dragging
  }
}
