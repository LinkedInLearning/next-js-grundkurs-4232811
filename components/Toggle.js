'use client'
import { useState } from "react";

export function Toggle() {
  const [visible, setVisible] = useState();

  return (
    <div className='mt-6'>
      <button
        onClick={() => setVisible(!visible)}
        className="bg-emerald-700 p-1 px-3 text-white border-2 border-emerald-500 rounded-lg"
      >
        Geheimnis togglen
      </button>

      {visible &&
        <div className="p-2 mt-4 bg-red-300">
          Das Geheimnis
        </div>
      }
    </div>
  )
}