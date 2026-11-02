name: Run Tests                 # <- WORKFLOW: the whole file is one workflow

on: [push]                      # <- EVENT (TRIGGER): runs on every push

jobs:                           # <- JOB: a named unit of work
  test:
    runs-on: ubuntu-latest      # <- RUNNER: the machine that executes this job
    steps:                      # <- STEPS: individual tasks inside the job
      - uses: actions/checkout@v4      # <- ACTION: a reusable, pre-packaged step
      - uses: actions/setup-java@v4  # <- ACTION
        with:
          java-version: "17"
          distribution: "temurin"
      - run: mvn test                    # <- STEP (a plain shell command)
