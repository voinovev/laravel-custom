<?php

namespace App\Tests;

use App\Tests\Traits\DatabaseSeeds;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\TestCase as BaseTest;
use Illuminate\Foundation\Console\Kernel;

class TestCase extends BaseTest
{
    use DatabaseMigrations, DatabaseSeeds, DatabaseTransactions;

    /**
     * The base URL to use while testing the application.
     *
     * @var string
     */
    protected $baseUrl = 'http://localhost';

    /**
     * Creates the application.
     *
     * @return \Illuminate\Foundation\Application
     */
    public function createApplication()
    {
        putenv('DB_CONNECTION=sqlite');

        $app = require __DIR__.'/../bootstrap/app.php';

        $app->make(Kernel::class)->bootstrap();

        return $app;
    }
}
