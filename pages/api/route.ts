import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Mock worker results for testing
  const mock = [
    {
      worker_id: 1,
      name: "A1 Paint Co",
      city: "Hyderabad",
      distance_km: 2.3,
      skills: "painting, interior",
      portfolio: "Modern bedroom painting, texture finishes",
      rating: 4.6,
      price_min: 1500,
      price_max: 4000,
      availability: "Available",
      next_available_date: null,
      score: 0.87
    },
    {
      worker_id: 2,
      name: "FloorCraft",
      city: "Hyderabad",
      distance_km: 6.8,
      skills: "flooring, tiling",
      portfolio: "Marble & vitrified tiling, waterproofing",
      rating: 4.3,
      price_min: 2000,
      price_max: 5000,
      availability: "Working",
      next_available_date: "2025-09-15",
      score: 0.78
    }
  ];

  return NextResponse.json(mock, { status: 200 });
}
