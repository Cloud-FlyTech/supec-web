<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI画像生成民主化プロジェクト</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script> </head>
<body>

    <header>
        <div class="container">
            <div class="logo">AI画像生成民主化プロジェクト</div>
            <nav>
                <ul>
                    <li><a href="#about">概要</a></li>
                    <li><a href="#technology">技術</a></li>
                    <li><a href="#roadmap">ロードマップ</a></li>
                    <li><a href="#developer">開発者</a></li>
                    <li><a href="#contact">連絡先</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section id="hero">
            <div class="hero-content">
                <h1>AIによる創造性を、すべての人へ。</h1>
                <p>クラウド技術を駆使し、誰もが直感的に扱えるAI画像生成プラットフォームを構築します。</p>
                <a href="#about" class="cta-button">プロジェクト詳細へ</a>
            </div>
        </section>

        <section id="about" class="content-section">
            <div class="container">
                <h2>プロジェクト概要とビジョン</h2>
                <p>
                    本プロジェクトは、最先端のAI画像生成技術を、専門家だけでなく、あらゆるクリエイター、教育者、ビジネスパーソンが手軽に利用できる世界の実現を目指します。高価な機材や複雑な設定は不要です。AWSの堅牢なクラウドインフラを活用し、誰もが直感的に、かつ低コストでアイデアをビジュアル化できるサービスを構築します。
                </p>
            </div>
        </section>

        <section id="technology" class="content-section bg-light">
            <div class="container">
                <h2>技術スタック</h2>
                <div class="tech-stack">
                    <div class="tech-card">
                        <div class="tech-icon">SD</div>
                        <h3>Stable Diffusion</h3>
                        <p>創造性の核となる画像生成AI。高品質で多様なスタイルの画像を生成する能力を最大限に引き出し、最適化します。</p>
                    </div>
                    <div class="tech-card">
                        <div class="tech-icon">AWS</div>
                        <h3>Amazon Web Services</h3>
                        <p>スケーラビリティ、信頼性、セキュリティの基盤。EC2, S3, Lambda等を活用し、安定したサービス提供を実現します。</p>
                    </div>
                    <div class="tech-card">
                        <div class="tech-icon">N.js</div>
                        <h3>Next.js</h3>
                        <p>モダンなWebフロントエンドを構築するためのフレームワーク。高速な表示と優れたユーザー体験を提供します。</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="roadmap" class="content-section">
            <div class="container">
                <h2>開発計画・ロードマップ</h2>
                <div class="roadmap-timeline">
                    <div class="timeline-item current">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>Phase 1: 基礎開発 (現在)</h3>
                            <p>要件定義、技術選定、AWSインフラ設計・構築、Stable Diffusionモデルの最適化と検証。</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>Phase 2: α版開発</h3>
                            <p>コア機能（テキストからの画像生成）の実装、ユーザー認証システムの構築。</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>Phase 3: β版リリース</h3>
                            <p>限定ユーザーへの公開、フィードバック収集と機能改善。</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>Phase 4: 正式リリース</h3>
                            <p>一般公開と、継続的な機能拡充（画像編集、スタイル指定機能など）。</p>
                        </div>
                    </div>
                </div>
                <div class="progress-status">
                    <h4>現在の進捗状況: 準備中</h4>
                    <p>現在、Phase 1のインフラ設計と技術検証を進めています。最新情報はGitHubでご確認ください。</p>
                </div>
            </div>
        </section>

        <section id="developer" class="content-section bg-light">
            <div class="container developer-profile">
                <img src="image.png" alt="中村河末" class="profile-pic">
                <div class="profile-text">
                    <h2>開発者紹介</h2>
                    <h3>中村 河末 (Kawamatsu Nakamura)</h3>
                    <p>クラウド技術とAIの可能性に魅せられ、本プロジェクトを立ち上げました。技術の力で人々の創造性を解き放ち、誰もがアイデアを形にできる未来を目指しています。ご意見やコラボレーションのご提案など、お気軽にご連絡ください。</p>
                </div>
            </div>
        </section>

        <section id="contact" class="content-section">
            <div class="container">
                <h2>連絡先・GitHub</h2>
                <p>プロジェクトへのご意見、ご質問、協力のご提案など、お待ちしております。</p>
                <div class="contact-links">
                    <a href="mailto:contact.project.sample@email.com" class="contact-button">Email</a>
                    <a href="https://github.com/your-github-repo" target="_blank" class="contact-button github">GitHub</a>
                </div>
            </div>
        </section>

    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 AI画像生成民主化プロジェクト. All Rights Reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
