
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-d7k6npd91e',
  shadow: true,
})
export class Cd7k6npd91e {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  