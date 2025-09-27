export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <h1 style={{fontSize: '3rem', marginBottom: '20px'}}>
          ScratchStrategy™
        </h1>
        <p style={{fontSize: '1.5rem', marginBottom: '30px'}}>
          Revolutionary Scratch Card Gaming
        </p>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '30px',
          borderRadius: '15px',
          maxWidth: '600px'
        }}>
          <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>🎉 Success!</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '15px'}}>
            Your demo is now live and ready to impress investors
          </p>
          <p style={{fontSize: '1rem', opacity: '0.9'}}>
            Every card has winning potential. Strategic gameplay meets guaranteed opportunity.
          </p>
        </div>
      </div>
    </div>
  )
}
