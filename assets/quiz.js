class Quiz {
  constructor(el) {
    const dataEl = document.getElementById('quiz-data-' + el.dataset.sectionId)
    if (!dataEl) return
    this.data = JSON.parse(dataEl.textContent)
    this.el = el
    this.history = []
    this.current = this.data.startId
    const section = el.closest('.QuizSection')
    this.bar = section.querySelector('.js-quiz-bar')
    this.progressEl = this.bar && this.bar.closest('[role="progressbar"]')
    this.stepCount = section.querySelector('.js-quiz-step-count')
    this.backBtn = el.querySelector('.js-quiz-back')
    this.go(this.data.startId)
    el.addEventListener('click', e => this.onClick(e))
  }

  go(id) {
    this.el.querySelectorAll('[data-quiz-step]').forEach(s => s.classList.remove('is-active'))
    const target = this.el.querySelector('[data-quiz-step="' + id + '"]')
    if (target) {
      target.classList.add('is-active')
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
    this.backBtn.hidden = this.history.length === 0

    const isResult = target && target.dataset.stepType === 'result'
    const pct = isResult ? 100 : Math.min(Math.round((this.history.length / this.data.maxDepth) * 100), 95)

    if (this.bar) {
      this.bar.style.width = pct + '%'
      this.progressEl.setAttribute('aria-valuenow', pct)
    }

    if (this.stepCount) {
      if (isResult) {
        this.stepCount.style.display = 'none'
      } else {
        this.stepCount.style.display = ''
        this.stepCount.textContent = 'Question ' + (this.history.length + 1) + ' of ' + this.data.maxDepth
      }
    }
  }

  onClick(e) {
    const answer = e.target.closest('.js-quiz-answer')
    if (answer) {
      this.history.push(this.current)
      this.current = answer.dataset.next
      this.go(this.current)
      return
    }
    if (e.target.closest('.js-quiz-back')) {
      this.current = this.history.pop()
      this.go(this.current)
      return
    }
    if (e.target.closest('.js-quiz-restart')) {
      this.history = []
      this.current = this.data.startId
      this.go(this.current)
    }
  }
}

function initQuiz(scope) {
  scope.querySelectorAll('.js-quiz').forEach(el => new Quiz(el))
}

initQuiz(document)
document.addEventListener('shopify:section:load', e => initQuiz(e.target))
