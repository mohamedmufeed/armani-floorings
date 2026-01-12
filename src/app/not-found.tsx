import Link from "next/link"
export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="text-center space-y-6 max-w-md">
                <div className="space-y-2">
                    <h1 className="text-8xl font-bold text-muted-foreground text-[#0A8DC1]">404</h1>
                    <h2 className="text-2xl font-semibold text-foreground text-[#0A8DC1]">Page Not Found</h2>
                    <p className="text-muted-foreground text-balance">
  Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
</p>

                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className=" bg-black text-white border font-bold p-2 rounded-lg">
                        <Link href="/">Go Home</Link>
                    </button>
                    <button className=" bg-black text-white border font-bold p-2 rounded-lg">
                        <Link href="javascript:history.back()">Go Back</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
