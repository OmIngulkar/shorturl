// app/api/shorten/route.js
import { NextResponse } from 'next/server';
import { globalUrlMappings } from '@/lib/urlStore'; // Corrected import path

export async function POST(request) {
  const { originalUrl, shortCode } = await request.json();

  if (!originalUrl || !shortCode) {
    return NextResponse.json({ message: "Missing originalUrl or shortCode" }, { status: 400 });
  }

  // Basic validation for shortCode (to prevent conflicts with real paths)
  // This regex should match the one in next.config.mjs rewrites
  const slugRegex = /^[a-zA-Z0-9_-]+$/;
  if (!slugRegex.test(shortCode)) {
    return NextResponse.json({ message: "Invalid short code. Only letters, numbers, hyphens, and underscores are allowed." }, { status: 400 });
  }

  // Check for uniqueness (case-sensitive for simplicity)
  const existingMapping = globalUrlMappings.find(
    (mapping) => mapping.shortCode === shortCode
  );

  if (existingMapping) {
    return NextResponse.json({ message: `Short URL '${shortCode}' already exists.` }, { status: 409 }); // 409 Conflict
  }

  // Save the new mapping
  globalUrlMappings.push({ shortCode, originalUrl });
  console.log("New mapping saved:", { shortCode, originalUrl });
  console.log("Current mappings:", globalUrlMappings); // For debugging

  return NextResponse.json({ message: "Short URL created successfully", shortCode }, { status: 201 }); // 201 Created
}