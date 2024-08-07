import { saveAction } from "./save/actions";

export default function NewArticle() {
  return (
    <form className="flex flex-col gap-3"
      action={saveAction}
    >
      <input
        name="title"
        placeholder="Titel..."
        type="text"
        className="border-2  indent-2 p-2"
      />
      <textarea
        name="content"
        placeholder="Inhalt..."
        className="border-2  indent-2 p-2"
      />
      <input
        name="image"
        type="text"
        placeholder="Bild?"
        className="border-2 indent-2 p-2"
      />

      <button type='submit' className="bg-indigo-700 text-white p-3">
        Artikel erstellen
      </button>
    </form>
  )
}