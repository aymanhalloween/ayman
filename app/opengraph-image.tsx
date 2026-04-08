import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ayman Hassen';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FFFFFF',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 400,
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            marginBottom: 24,
          }}
        >
          Ayman Hassen
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#525252',
            lineHeight: 1.6,
          }}
        >
          Founder of Maidah. Previously Apple, Nike, Alif.
        </div>
        <div
          style={{
            fontSize: 18,
            color: '#8A8A8A',
            marginTop: 40,
          }}
        >
          aymanhassen.com
        </div>
      </div>
    ),
    { ...size }
  );
}
