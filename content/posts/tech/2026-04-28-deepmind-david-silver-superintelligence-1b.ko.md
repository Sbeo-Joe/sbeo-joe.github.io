---
title: "알파고 아버지, 인간 데이터 없는 AI에 11억 달러 베팅 — 딥마인드 출신 창업자의 역대 최대 시드 라운드"
date: 2026-04-28T05:46:21+09:00
layout: "post"
description: "알파제로를 설계한 딥마인드의 데이비드 실버가 창업한 이니퍼블 인텔리전스가 역대 최대 시드 라운드인 11억 달러를 유치했다. 인간이 생성한 데이터 없이 순수 강화학습만으로 초지능 AI를 만든다는 목표이며, NVIDIA와 Google이 투자자로 참여했다."
categories:
  - 기술
tags:
  - "딥마인드"
  - "데이비드 실버"
  - "강화학습"
  - "AI 스타트업"
  - "시드 라운드"
thumbnail: "https://media.wired.com/photos/69eba31172fa130deff56162/master/pass/Man-Behind-Alpha-Zero-Business-DavidSilver-2.jpg"
---

역대 최대 규모 시드 라운드가 탄생했다. <mark>$11억(약 1조 5,000억 원)</mark> 을 유치한 **이니퍼블 인텔리전스(Ineffable Intelligence)** 는 창업한 지 불과 수개월 된 영국 AI 스타트업이다. 그 배후에는 **알파고와 알파제로** 를 설계한 딥마인드의 수석 연구원 **데이비드 실버(David Silver)** 가 있다.

## 핵심 포인트

- 시드 라운드 <mark>$11억</mark>, 기업 가치 <mark>$51억(약 7조 원)</mark> — AI 업계 역대 최대 시드 규모
- 목표: **인간이 만든 데이터를 전혀 사용하지 않고** 강화학습만으로 AI 슈퍼러너 구축
- 주요 투자자: **NVIDIA**, **Google** 포함 — 기존 LLM 패러다임에 도전하는 연구에 빅테크가 베팅

## 왜 지금인가: LLM의 구조적 한계

실버는 와이어드(Wired) 인터뷰에서 AI는 잘못된 길을 걷고 있다고 말했다. 현재 주류 AI 개발 방식은 **LLM(대규모 언어 모델, Large Language Model)** — 인터넷에서 수집한 수십조 건의 인간 생성 텍스트로 모델을 훈련시키는 방식이다.

![이미지 1](https://media.wired.com/photos/69eba31172fa130deff56162/master/pass/Man-Behind-Alpha-Zero-Business-DavidSilver-2.jpg)
*▲ 데이비드 실버 (출처: [The Man Behind AlphaGo Thinks AI Is Taking the Wrong Path](https://www.wired.com/story/david-silver-ai-ineffable-intelligence-reinforcement-learning/))*

실버의 주장은 이렇다. 알파제로는 체스, 바둑, 쇼기 규칙만 주어진 상태에서 인간의 기보 없이 자기대결(self-play)만으로 세계 최고 수준에 도달했다. <span class="hl-blue">같은 원리를 일반 지능에 적용하면 인간 수준을 훨씬 뛰어넘는 AI가 가능하다</span>는 것이다.

현재 GPT-4o나 클로드(Claude) 같은 최신 LLM은 인터넷의 방대한 텍스트를 학습하지만, 그 데이터는 결국 **인간이 이미 알고 있는 것** 만 담겨 있다. <span class="hl-red">인간 지식의 천장을 넘어설 수 없다</span>는 구조적 한계다.

## 강화학습의 귀환: 왜 이 시점인가

강화학습(RL, Reinforcement Learning) 기반 AI 연구는 알파고의 성공 이후 주목받았지만, LLM의 급부상으로 한동안 주류에서 밀려났다. 그러나 최근 기조가 바뀌고 있다.

오픈AI의 o3 모델, 딥마인드의 알파코드2 등이 강화학습을 LLM에 결합하는 방향으로 진화하고 있다. 실버는 여기서 한 발 더 나아가, **LLM 없이 순수 강화학습** 으로 슈퍼러너를 만들겠다는 것이다.

| 접근법 | 대표 모델 | 데이터 의존도 | 주요 특징 |
|--------|---------|------------|----------|
| 순수 LLM | GPT-4o, 클로드 | 매우 높음 | 인간 지식 한계 내 |
| LLM+RL 혼합 | OpenAI o3 | 중간 | 추론 능력 강화 |
| 순수 RL | 알파제로, 이니퍼블 | 없음(규칙만) | 이론적 무한 확장성 |

## 투자자 분석: NVIDIA와 Google이 베팅하는 이유

**NVIDIA(NVDA) 관점**: 순수 강화학습 AI는 훈련에 막대한 GPU 컴퓨팅이 필요하다. 이니퍼블이 성공하면 H100·B200 칩 수요는 더욱 폭발할 수 있다. <span class="hl-blue">엔비디아 입장에서 실버에 대한 투자는 미래 컴퓨팅 수요 확보 전략</span>이다.

**구글(GOOGL) 관점**: 딥마인드를 보유한 알파벳이 딥마인드 출신 연구자의 경쟁사에 투자한다는 것은 역설적이다. 그러나 구글은 이미 다수의 경쟁 AI 스타트업에 동시 투자하는 포트폴리오 전략을 취하고 있다. AI 패러다임이 어느 방향으로 가든 수혜를 보겠다는 계산이다.

> "슈퍼러너란 어떤 환경에서든 빠르게 학습하고 적응하는 AI다. 인간 데이터의 도움 없이."

## 최대 리스크: 범용성 검증

<span class="hl-red">이 접근법의 최대 리스크</span>는 범용성 검증이다. 알파제로는 게임이라는 명확한 규칙과 보상 함수가 있었다. 현실 세계는 훨씬 복잡하고 보상 함수가 불명확하다. <mark>$51억</mark> 가치를 정당화하려면 창업 후 2~3년 내에 실질적 범용 학습 능력을 입증해야 한다는 분석이 지배적이다.

연결고리를 따라가면: 순수 RL 슈퍼러너 성공 → LLM 기반 AI 투자 재편 → GPU 수요 지속 → <span class="hl-blue">엔비디아(NVDA) 수혜</span> vs 오픈AI·앤트로픽 패러다임 도전. 이니퍼블이 성공하면 AI 산업 전체의 투자 축이 이동한다. 그 시점을 지금 베팅하는 것이 이 <mark>$11억</mark> 라운드의 핵심이다.

## 참고 기사

1. [Former Google DeepMind researcher raises record $1.1 billion seed funding](https://www.cnbc.com/2026/04/27/deepmind-ineffable-intelligence-record-seed-funding-nvidia-google.html) — CNBC
2. [DeepMind David Silver just raised $1.1B to build an AI that learns without human data](https://techcrunch.com/2026/04/27/deepminds-david-silver-just-raised-1-1b-to-build-an-ai-that-learns-without-human-data/) — TechCrunch
3. [The Man Behind AlphaGo Thinks AI Is Taking the Wrong Path](https://www.wired.com/story/david-silver-ai-ineffable-intelligence-reinforcement-learning/) — Wired
