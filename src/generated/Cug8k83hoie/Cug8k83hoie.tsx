
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-ug8k83hoie',
  shadow: true,
})
export class Cug8k83hoie {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  