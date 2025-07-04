// app/api/redirect/[slug]/route.js
import { NextResponse } from 'next/server';
import { globalUrlMappings } from '@/lib/urlStore'; // Corrected import path

export async function GET(request, { params }) {
  const { slug } = params;

  console.log(`[Redirect API] Received request for slug: ${slug}`);

  if (!slug) {
    return NextResponse.json({ message: "Short URL slug is missing" }, { status: 400 });
  }

  // Find the mapping in the shared storage
  const foundMapping = globalUrlMappings.find(
    (mapping) => mapping.shortCode === slug
  );

  if (foundMapping) {
    console.log(`[Redirect API] Redirecting '${slug}' to: ${foundMapping.originalUrl}`);
    // Ensure the originalUrl is a valid URL for redirection
    try {
        const url = new URL(foundMapping.originalUrl);
        return NextResponse.redirect(url.toString(), 301); // 301 for permanent redirect
    } catch (e) {
        console.error(`[Redirect API] Invalid URL stored for '${slug}': ${foundMapping.originalUrl}`, e);
        return NextResponse.json({ message: "Invalid URL stored for this short code." }, { status: 500 });
    }
  } else {
    console.log(`[Redirect API] Short URL '${slug}' not found in mappings.`);
    return NextResponse.json({ message: `Short URL '${slug}' not found` }, { status: 404 });
  }
}