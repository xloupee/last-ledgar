"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // Add client-side rendering state
  const [isClient, setIsClient] = useState(false);
  // Add state for copy feedback
  const [copied, setCopied] = useState(false);

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to copy address to clipboard
  const copyToClipboard = () => {
    const address = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // Replace with your actual address
    navigator.clipboard.writeText(address)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  // Updated episode data with all episodes locked and market cap goals every 200k
  const episodes = [
    {
      id: 1,
      title: "The Birth of Trump Token",
      description: "The announcement echoes through the halls of Crypto Twitter—TRUMP TOKEN has launched.",
      thumbnail: "/episodes/ep1-thumbnail.jpg",
      duration: "2:15",
      date: "???",
      videoUrl: "https://example.com/episode1",
      marketCap: "200K",
      unlocked: false,
    },
    {
      id: 2,
      title: "Market Chaos Ensues",
      description: "Chaos reigns in the grand bazaar, as whales and shrimp alike scramble to stake their claim.",
      thumbnail: "/episodes/ep2-thumbnail.jpg",
      duration: "28:42",
      date: "???",
      videoUrl: "https://example.com/episode2",
      marketCap: "400K",
      unlocked: false,
    },
    {
      id: 3,
      title: "The Call for Elon",
      description: "Desperation spreads like wildfire, and one name is whispered in hushed reverence—Elon, the Memelord.",
      thumbnail: "/episodes/ep3-thumbnail.jpg",
      duration: "3:08",
      date: "???",
      videoUrl: "https://example.com/episode3",
      marketCap: "600K",
      unlocked: false,
    },
    {
      id: 4,
      title: "Whales Enter the Fray",
      description: "The ancient beings of immense wealth begin to move, causing ripples across the cryptoverse.",
      thumbnail: "/episodes/ep4-thumbnail.jpg",
      duration: "2:33",
      date: "???",
      videoUrl: "https://example.com/episode4",
      marketCap: "800K",
      unlocked: false,
    },
    {
      id: 5,
      title: "The Prophecy Unfolds",
      description: "Ancient scrolls of the blockchain reveal a prophecy that could change the fate of Trump Token forever.",
      thumbnail: "/episodes/ep5-thumbnail.jpg",
      duration: "3:21",
      date: "???",
      videoUrl: "https://example.com/episode5",
      marketCap: "1M",
      unlocked: false,
    },
  ];

  // If not client-side yet, show a simple loading state
  if (!isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
          <p>The Cryptoverse Saga is initializing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Support Alert Banner */}
      <div className="sticky top-0 z-50 w-full bg-yellow-500/90 backdrop-blur-sm text-black py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
            <p className="text-sm font-medium">Support the Cryptoverse Saga: <span className="font-mono bg-black/10 px-2 py-1 rounded">0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D</span></p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-black/10 border-black/20 text-black hover:bg-black/20 mt-2 sm:mt-0"
            onClick={copyToClipboard}
          >
            {copied ? "Copied!" : "Copy Address"}
          </Button>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[300px] w-[500px] rounded-full bg-purple-500 opacity-10 blur-[100px]" />
          <div className="absolute right-0 bottom-0 -z-10 h-[250px] w-[400px] rounded-full bg-yellow-500 opacity-10 blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <Badge className="px-4 py-1 text-sm" variant="outline">The Cryptoverse Saga</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
              A Tale of Digital Peril and Boundless Riches
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[700px]">
              Where fortunes are forged in fire and lost to the abyss in the blink of an eye.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:text-white">
                Watch Latest Episode
              </Button>
              <Button size="lg" variant="outline">
                Explore the Lore
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Synopsis */}
      <section className="w-full py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">The Story So Far</h2>
              <p className="text-muted-foreground">
                Our story takes place in the realm of the cryptoverse, a land of endless peril and boundless riches, where fortunes were forged in fire and lost to the abyss in the blink of an eye. All was well for a while, many frolicted in euphoria in this land of opportunity...
              </p>
              <p className="text-muted-foreground">
                But all that was soon to come to an end. For a storm rages over the digital realm. The air crackles with the energy of speculation. In the great halls of Crypto Twitter, the announcement echoes—TRUMP TOKEN has launched.
              </p>
              <p className="text-muted-foreground">
                Desperation spread like wildfire, and as the cries of ruin echoed across the land, one name was whispered in hushed reverence—Elon, the Memelord. The Supreme Being of the cryptoverse, wielder of the Doge Scepter, he alone had the power to restore balance.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-yellow-500/20 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="outline" size="icon" className="h-16 w-16 rounded-full bg-background/80 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span className="sr-only">Play</span>
                </Button>
              </div>
              <div className="absolute inset-0 border border-white/10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Episodes Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Watch the Saga Unfold</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Follow the epic tale of the cryptoverse through our video episodes, chronicling the rise of Trump Token and the quest for Elon, the Memelord.
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-muted-foreground">Unlocked</span>
              <div className="w-3 h-3 rounded-full bg-yellow-500 ml-4"></div>
              <span className="text-sm text-muted-foreground">Locked (Market Cap Milestone Required)</span>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Episodes</TabsTrigger>
                <TabsTrigger value="unlocked">Unlocked</TabsTrigger>
                <TabsTrigger value="locked">Coming Soon</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {episodes.map((episode) => (
                  <Card key={episode.id} className="overflow-hidden bg-muted/50 backdrop-blur-sm border-muted">
                    <div className="relative aspect-video">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-yellow-500/10" />
                      {episode.unlocked ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button variant="outline" size="icon" className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            <span className="sr-only">Play</span>
                          </Button>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex flex-col items-center space-y-2 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-500">
                              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <span className="text-sm font-medium">Unlocks at ${episode.marketCap} Market Cap</span>
                          </div>
                        </div>
                      )}
                      <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                        <div className="flex items-center space-x-1">
                          <div className={`w-2 h-2 rounded-full ${episode.unlocked ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                          <span className="text-xs">{episode.unlocked ? 'Unlocked' : 'Locked'}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded">
                        {episode.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{episode.title}</CardTitle>
                      <CardDescription className="flex justify-between items-center">
                        <span>{episode.date}</span>
                        {!episode.unlocked && (
                          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                            ${episode.marketCap} Market Cap
                          </Badge>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{episode.description}</p>
                    </CardContent>
                    <CardFooter>
                      {episode.unlocked ? (
                        <Button variant="ghost" asChild className="w-full">
                          <Link href={episode.videoUrl}>Watch Episode</Link>
                        </Button>
                      ) : (
                        <Button variant="ghost" disabled className="w-full opacity-70">
                          Episode Locked
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="unlocked" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {episodes.filter(ep => ep.unlocked).map((episode) => (
                  <Card key={episode.id} className="overflow-hidden bg-muted/50 backdrop-blur-sm border-muted">
                    <div className="relative aspect-video">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-yellow-500/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          <span className="sr-only">Play</span>
                        </Button>
                      </div>
                      <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-xs">Unlocked</span>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded">
                        {episode.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{episode.title}</CardTitle>
                      <CardDescription>{episode.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{episode.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" asChild className="w-full">
                        <Link href={episode.videoUrl}>Watch Episode</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="locked" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {episodes.filter(ep => !ep.unlocked).map((episode) => (
                  <Card key={episode.id} className="overflow-hidden bg-muted/50 backdrop-blur-sm border-muted">
                    <div className="relative aspect-video">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-yellow-500/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center space-y-2 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-500">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          <span className="text-sm font-medium">Unlocks at ${episode.marketCap} Market Cap</span>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <span className="text-xs">Locked</span>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded">
                        {episode.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{episode.title}</CardTitle>
                      <CardDescription className="flex justify-between items-center">
                        <span>{episode.date}</span>
                        <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                          ${episode.marketCap} Market Cap
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{episode.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" disabled className="w-full opacity-70">
                        Episode Locked
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Market Cap Progress Section - updated to show not started */}
          <div className="mt-16 bg-muted/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-center">Saga Unlock Progress</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Market Cap</span>
                  <div className="flex items-center">
                    <span className="font-medium text-muted-foreground">Not launched yet</span>
                    <Badge variant="outline" className="ml-2 bg-blue-500/10 text-blue-400 border-blue-500/20">
                      Coming Soon
                    </Badge>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gray-500 to-gray-400 rounded-full opacity-30" style={{ width: '0%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$0</span>
                  <span>$200K</span>
                  <span>$400K</span>
                  <span>$600K</span>
                  <span>$800K</span>
                  <span>$1M</span>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {episodes.map((episode) => (
                  <div key={episode.id} className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-muted text-muted-foreground border border-muted-foreground/30">
                      {episode.id}
                    </div>
                    <div className="text-xs mt-1 text-center">${episode.marketCap}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-400 mr-2 mt-0.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-blue-400">Token Launch Pending</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      The Token has not yet been launched. Episodes will unlock automatically as market cap milestones are reached.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Characters */}
      <section className="w-full py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Key Characters</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Meet the legendary figures who shape the destiny of the cryptoverse.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-muted/50 backdrop-blur-sm border-muted">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center mb-2">
                  <span className="text-3xl">🪙</span>
                </div>
                <CardTitle>Trump Token</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  The mysterious artifact of power that emerged from the digital mist, causing chaos throughout the realm.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 backdrop-blur-sm border-muted">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                  <span className="text-3xl">🚀</span>
                </div>
                <CardTitle>Elon, the Memelord</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  The Supreme Being of the cryptoverse, wielder of the Doge Scepter, watching from his celestial throne.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 backdrop-blur-sm border-muted">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                  <span className="text-3xl">🐋</span>
                </div>
                <CardTitle>The Whales</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Ancient beings of immense wealth who move markets with a single transaction, causing ripples across the cryptoverse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Stay Updated on the Saga</h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter to receive notifications when new episodes are released and get exclusive behind-the-scenes content.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-2">The Cryptoverse Saga</h3>
              <p className="text-sm text-muted-foreground">
                A fictional tale of digital adventure in the world of cryptocurrency.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Episodes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Characters
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Lore
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://x.com/LastLedgerSOL" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="text-center text-sm text-muted-foreground">
            © 2023 The Cryptoverse Saga. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
