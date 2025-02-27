import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Sample episode data
  const episodes = [
    {
      id: 1,
      title: "The Birth of Trump Token",
      description: "The announcement echoes through the halls of Crypto Twitter—TRUMP TOKEN has launched.",
      thumbnail: "/episodes/ep1-thumbnail.jpg",
      duration: "24:15",
      date: "May 15, 2023",
      videoUrl: "https://example.com/episode1",
    },
    {
      id: 2,
      title: "Market Chaos Ensues",
      description: "Chaos reigns in the grand bazaar, as whales and shrimp alike scramble to stake their claim.",
      thumbnail: "/episodes/ep2-thumbnail.jpg",
      duration: "28:42",
      date: "May 22, 2023",
      videoUrl: "https://example.com/episode2",
    },
    {
      id: 3,
      title: "The Call for Elon",
      description: "Desperation spreads like wildfire, and one name is whispered in hushed reverence—Elon, the Memelord.",
      thumbnail: "/episodes/ep3-thumbnail.jpg",
      duration: "31:08",
      date: "May 29, 2023",
      videoUrl: "https://example.com/episode3",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
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
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Episodes</TabsTrigger>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {episodes.map((episode) => (
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
              <div className="flex justify-center">
                <Button variant="outline">Load More Episodes</Button>
              </div>
            </TabsContent>

            <TabsContent value="latest" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {episodes.slice(0, 1).map((episode) => (
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

            <TabsContent value="popular" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {episodes.slice(1, 3).map((episode) => (
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
          </Tabs>
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
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
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
