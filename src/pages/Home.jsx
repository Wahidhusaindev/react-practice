import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='min-h-screen bg-amber-200'>
            <div className="min-h-screen bg-amber-200 flex items-center">
                <div className="mx-auto max-w-5xl px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Superpowered SEO for ambitious brands
                    </h1>

                    <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Media Heroes is an Australian SEO agency focused on profitable, sustainable growth.
                        We turn organic search into qualified demand, stronger pipelines, and long-term revenue.
                    </p>

                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Your SEO strategy is led by senior specialists with 20+ years of hands-on experience,
                        combining deep technical SEO with AI-driven optimisation.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <button className="rounded-lg bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-700">
                            Book SEO Consultation
                        </button>

                        <button className="rounded-lg border border-pink-500 px-8 py-3 font-semibold text-pink-600 transition hover:bg-pink-100">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home