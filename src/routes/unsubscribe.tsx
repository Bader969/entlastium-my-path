import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/unsubscribe')({
  component: UnsubscribePage,
  head: () => ({
    meta: [
      { title: 'Abmelden | Entlastium Entrümpelung & Haushaltsauflösungen' },
      {
        name: 'description',
        content:
          'Professionelle Entrümpelung mit System & Erfahrung Wir sind ein dynamisches Unternehmen, das frischen Wind in die Branche bringt – fundiert durch langjährige Erfahrung und tiefe Fachkenntnis im Bereich der Entrümpelung. Unser Team besteht aus eingespielten Profis, die wissen, worauf es ankommt: Diskretion, Schnelligkeit und absolute Zuverlässigkeit. Wir schaffen Raum für das, was zählt – professionell, termingerecht und mit höchster Sorgfalt.',
      },
      { name: 'robots', content: 'noindex,nofollow' },
      { property: 'og:title', content: 'Abmelden | Entlastium Entrümpelung & Haushaltsauflösungen' },
      {
        property: 'og:description',
        content:
          'Professionelle Entrümpelung mit System & Erfahrung Wir sind ein dynamisches Unternehmen, das frischen Wind in die Branche bringt – fundiert durch langjährige Erfahrung und tiefe Fachkenntnis im Bereich der Entrümpelung. Unser Team besteht aus eingespielten Profis, die wissen, worauf es ankommt: Diskretion, Schnelligkeit und absolute Zuverlässigkeit. Wir schaffen Raum für das, was zählt – professionell, termingerecht und mit höchster Sorgfalt.',
      },
      { property: 'og:url', content: 'https://entlastium.de/unsubscribe' },
    ],
    links: [{ rel: 'canonical', href: 'https://entlastium.de/unsubscribe' }],
  }),
})

type State =
  | { kind: 'loading' }
  | { kind: 'valid' }
  | { kind: 'already' }
  | { kind: 'invalid' }
  | { kind: 'submitting' }
  | { kind: 'success' }
  | { kind: 'error'; message: string }

function UnsubscribePage() {
  const [state, setState] = useState<State>({ kind: 'loading' })
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const t = params.get('token')
    if (!t) {
      setState({ kind: 'invalid' })
      return
    }
    setToken(t)
    fetch(`/email/unsubscribe?token=${encodeURIComponent(t)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.valid) setState({ kind: 'valid' })
        else if (data.reason === 'already_unsubscribed') setState({ kind: 'already' })
        else setState({ kind: 'invalid' })
      })
      .catch(() => setState({ kind: 'invalid' }))
  }, [])

  const confirm = async () => {
    if (!token) return
    setState({ kind: 'submitting' })
    try {
      const res = await fetch('/email/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const data = await res.json()
      if (data.success) setState({ kind: 'success' })
      else if (data.reason === 'already_unsubscribed') setState({ kind: 'already' })
      else setState({ kind: 'error', message: data.error || 'Fehler beim Abmelden.' })
    } catch (e) {
      setState({ kind: 'error', message: 'Netzwerkfehler.' })
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-card rounded-2xl border border-border p-8 text-center shadow-sm">
        <h1 className="text-2xl font-serif font-bold text-foreground mb-3">
          E-Mail-Benachrichtigungen
        </h1>

        {state.kind === 'loading' && (
          <p className="text-muted-foreground">Token wird geprüft …</p>
        )}

        {state.kind === 'valid' && (
          <>
            <p className="text-muted-foreground mb-6">
              Möchten Sie sich von E-Mails von Entlastium abmelden?
            </p>
            <button
              onClick={confirm}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Abmeldung bestätigen
            </button>
          </>
        )}

        {state.kind === 'submitting' && (
          <p className="text-muted-foreground">Wird abgemeldet …</p>
        )}

        {state.kind === 'success' && (
          <p className="text-foreground">
            Sie wurden erfolgreich abgemeldet. Sie erhalten keine weiteren E-Mails von uns.
          </p>
        )}

        {state.kind === 'already' && (
          <p className="text-muted-foreground">
            Diese E-Mail-Adresse ist bereits abgemeldet.
          </p>
        )}

        {state.kind === 'invalid' && (
          <p className="text-muted-foreground">
            Der Link ist ungültig oder abgelaufen.
          </p>
        )}

        {state.kind === 'error' && (
          <p className="text-destructive">{state.message}</p>
        )}

        <p className="mt-8 text-xs text-muted-foreground">
          <a href="/" className="hover:underline">Zur Startseite</a>
        </p>
      </div>
    </main>
  )
}
