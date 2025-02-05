import './Hero.css';
import { Button } from '../../shared/components/Button';
import AI from '../../assets/images/AI.gif';

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">
                    Revolutionize Your Business with AI
                </h1>
                <h2 className="hero-subtitle">
                    Unlock the power of artificial intelligence to transform your operations
                </h2>
                <Button />
            </div>
            <div className="hero-image">
                <img src={AI} alt="AI Technology" />
            </div>
        </div>
    )
}

export { Hero }