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
          background: '#0A0A0A',
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
            color: '#E8E8E8',
            letterSpacing: '-0.02em',
            marginBottom: 24,
          }}
        >
          Ayman Hassen
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#A0A0A0',
            lineHeight: 1.6,
          }}
        >
          Founder of Maidah. Previously Apple, Nike, Alif.
        </div>
        <div
          style={{
            fontSize: 18,
            color: '#636363',
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
