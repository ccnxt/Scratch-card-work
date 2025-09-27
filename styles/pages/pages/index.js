import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ScratchStrategy™ - Revolutionary Scratch Card Gaming</title>
        <meta name="description" content="Every card has winning potential" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <nav className="p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-white">ScratchStrategy™</h1>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Revolutionary Scratch Card Gaming
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Every card has winning potential. Strategic gameplay meets guaranteed opportunity.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 my-16">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Strategic Choice</h3>
              <p className="text-gray-300">Choose exactly 3 squares. Every decision matters.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Always Winnable</h3>
              <p className="text-gray-300">Every card contains a winning combination.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Results</h3>
              <p className="text-gray-300">Quick gameplay with immediate feedback.</p>
            </div>
          </div>

          <div className="bg-green-500/20 p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-bold mb-4">🎉 Demo Successfully Deployed!</h3>
            <p className="text-lg mb-4">Your professional scratch card demo is now live.</p>
            <p className="text-sm text-gray-300">
              Ready to show investors your revolutionary gaming concept.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
